import {getUUID} from "../../utils";
import * as bcrypt from "bcrypt";
import {Media} from "../Media";
import {Session} from "./Session";
import {QuestsReview} from "../quest/QuestsReview";
import {RatingStatistic} from "./RatingStatistic";
import {ChatMember} from "../chats/ChatMember";
import { LocationPostGISType, LocationType, Priority, WorkPlace, Phone, PayPeriod } from "../types";
import {UserSpecializationFilter} from "./UserSpecializationFilter";
import {DiscussionLike} from "../discussion/DiscussionLike";
import {DiscussionCommentLike} from "../discussion/DiscussionCommentLike";
import {Chat} from "../chats/Chat";
import {UserRaiseView} from "../raise-view/UserRaiseView";
import {QuestsStatistic} from "../quest/QuestsStatistic";
import {Wallet} from "../wallet/Wallet";
import {UserChatsStatistic} from "../chats/UserChatsStatistic";
import {ReferralProgramAffiliate} from "../referral-program/ReferralProgramAffiliate";
import {ReferralProgramReferral} from "../referral-program/ReferralProgramReferral";
import { WorkerProfileVisibilitySetting } from "./WorkerProfileVisibilitySetting";
import { EmployerProfileVisibilitySetting } from "./EmployerProfileVisibilitySetting";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Scopes,
  Table
} from "sequelize-typescript";


export interface SocialInfo {
  id: string;
  email: string;
  last_name: string;
  first_name: string;
}

export interface UserSocialSettings {
  google?: SocialInfo;
  facebook?: SocialInfo;
  twitter?: SocialInfo;
  linkedin?: SocialInfo;
}

export interface TOTP {
  confirmCode: string | null;
  active: boolean;
  secret: string | null;
}

export interface Security {
  TOTP: TOTP;
}

interface UserSettings {
  restorePassword: string | null;
  emailConfirm: string | null;
  phoneConfirm: string | null;
  social: UserSocialSettings;
  security: Security;
}

interface UserMetadata {
  state: {
    /**
     * Used to re-edit the profile.
     *    Re-editing a profile only through 2FA.
     *    See "edit profile" and "get me" handlers.
     *    When registering flag is true.
     * false: if the user edited the profile at least once
     *
     */
    neverEditedProfileFlag: boolean;
  }
}

export enum UserStatus {
  Unconfirmed,
  Confirmed,
  NeedSetRole,
  Blocked,
}

export enum UserRole {
  Employer = "employer",
  Worker = "worker",
}

export enum StatusKYC {
  Unconfirmed = 0,
  Confirmed,
}

interface SocialMediaNicknames {
  instagram: string | null;
  twitter: string | null;
  linkedin: string | null;
  facebook: string | null;
}

interface AdditionalInfo {
  description: string | null;
  secondMobileNumber: Phone | null;
  address: string | null;
  socialNetwork: SocialMediaNicknames;
}

interface Knowledge {
  from: string;
  to: string;
  place: string;
}

interface WorkExperience {
  from: string;
  to: string;
  place: string;
}

export interface AdditionalInfoWorker extends AdditionalInfo {
  skills: string[]; // TODO remove
  educations: Knowledge[] | null;
  workExperiences: WorkExperience[] | null;
}

export interface AdditionalInfoEmployer extends AdditionalInfo {
  company: string | null;
  CEO: string | null;
  website: string | null;
}

export const defaultUserSettings: UserSettings = {
  restorePassword: null,
  emailConfirm: null,
  phoneConfirm: null,
  social: {},
  security: {
    TOTP: {
      confirmCode: null,
      active: false,
      secret: null,
    }
  }
}

export const defaultUserMetadata: UserMetadata = {
  state: { neverEditedProfileFlag: true },
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["password", "settings", "updatedAt", "deletedAt", "locationPostGIS", "delegate"]
    },
    include: [{
      model: Media.scope('urlOnly'),
      as: 'avatar'
    }, {
      model: RatingStatistic,
      as: 'ratingStatistic'
    }, {
      model: UserRaiseView,
      as: 'raiseView'
    }, {
      model: UserSpecializationFilter,
      as: 'userSpecializations',
      attributes: ['path'],
    }, {
      model: QuestsStatistic,
      as: 'questsStatistic',
    }]
  },
  withPassword: {
    attributes: {
      exclude: ["locationPostGIS"],
      include: ["password", "settings", "tempPhone", "metadata"],
    }
  },
  short: {
    attributes: ["id", "firstName", "lastName", "role"],
    include: [{
      model: Media.scope('urlOnly'),
      as: 'avatar'
    }, {
      model: RatingStatistic,
      as: 'ratingStatistic'
    }, {
      model: UserRaiseView,
      as: 'raiseView'
    }]
  },
  shortWithAdditionalInfo: {
    attributes: ["id", "firstName", "lastName", "additionalInfo", "role"],
    include: [{
      model: Media.scope('urlOnly'),
      as: 'avatar'
    }, {
      model: RatingStatistic,
      as: 'ratingStatistic'
    }, {
      model: UserRaiseView,
      as: 'raiseView'
    }]
  },
  shortWithWallet: {
    attributes: ["id", "firstName", "lastName"],
    include: [{
      model: Media.scope('urlOnly'),
      as: 'avatar'
    }, {
      model: RatingStatistic,
      as: 'ratingStatistic'
    }, {
      model: UserRaiseView,
      as: 'raiseView'
    }, {
      model: Wallet,
      as: 'wallet'
    }]
  },
  shortForList: {
    attributes: ["id", "firstName", "lastName", "role"],
    include: [{
      model: Media.scope('urlOnly'),
      as: 'avatar'
    }]
  },
}))
@Table({ paranoid: true })
export class User extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => Media)
  @Column({type: DataType.STRING, defaultValue: null}) avatarId: string;

  /** User profile */
  @Column(DataType.STRING) lastName: string;
  @Column(DataType.STRING) firstName: string;
  @Column({type: DataType.STRING, unique: true}) email: string;
  @Column({type: DataType.STRING, defaultValue: null}) role: UserRole;
  @Column({type: DataType.JSONB, defaultValue: {}}) additionalInfo: object;

  /** User settings */
  @Column({
    type: DataType.STRING,
    set(value: string) {
      if (!value) {
        this.setDataValue("password", null);
        return;
      }

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(value, salt);
      this.setDataValue("password", hash);
    },
    get() {
      return this.getDataValue("password");
    }
  }) password: string;
  @Column({type: DataType.JSONB, defaultValue: null}) phone: Phone;
  @Column({type: DataType.JSONB, defaultValue: null}) tempPhone: Phone;
  @Column({type: DataType.JSONB, defaultValue: defaultUserSettings}) settings: UserSettings;
  @Column({type: DataType.INTEGER, defaultValue: UserStatus.Unconfirmed}) status: UserStatus;
  @Column({type: DataType.INTEGER, defaultValue: StatusKYC.Unconfirmed}) statusKYC: StatusKYC;

  /** User metadata */
  @Column({type: DataType.JSONB, defaultValue: defaultUserMetadata }) metadata: UserMetadata;

  /** UserRole.Worker: priority list for quests */
  @Column({type: DataType.DECIMAL, defaultValue: null}) costPerHour: string;
  @Column({type: DataType.STRING, defaultValue: null}) payPeriod: PayPeriod;
  @Column({type: DataType.STRING, defaultValue: null}) workplace: WorkPlace;
  @Column({type: DataType.INTEGER, defaultValue: Priority.AllPriority}) priority: Priority;

  /** Location fields and PostGIS */
  @Column(DataType.JSONB) location: LocationType;
  @Column(DataType.STRING) locationPlaceName: string;
  @Column(DataType.GEOMETRY('POINT', 4326)) locationPostGIS: LocationPostGISType;

  /** Profile visibility settings */
  @HasOne(() => WorkerProfileVisibilitySetting) workerProfileVisibilitySetting: WorkerProfileVisibilitySetting;
  @HasOne(() => EmployerProfileVisibilitySetting) employerProfileVisibilitySetting: EmployerProfileVisibilitySetting;

  /** Statistic */
  @HasOne(() => RatingStatistic) ratingStatistic: RatingStatistic;
  @HasOne(() => QuestsStatistic) questsStatistic: QuestsStatistic;
  @HasOne(() => UserChatsStatistic) chatStatistic: UserChatsStatistic;
  /** RaiseView */
  @HasOne(() => UserRaiseView) raiseView: UserRaiseView;

  @BelongsTo(() => Media, {constraints: false, foreignKey: 'avatarId'}) avatar: Media;

  @HasMany(() => Session) sessions: Session[];
  @HasMany(() => QuestsReview, 'toUserId') reviews: QuestsReview[];
  @HasMany(() => Media, {constraints: false}) medias: Media[];
  @HasMany(() => UserSpecializationFilter) userSpecializations: UserSpecializationFilter[];

  /** Wallet */
  @HasOne(() => Wallet) wallet: Wallet;

  /** ReferralProgram */
  @HasOne(() => ReferralProgramAffiliate) affiliateUser: ReferralProgramAffiliate;
  @HasOne(() => ReferralProgramReferral) referralUser: ReferralProgramReferral;

  /** Aliases for query */
  @HasOne(() => ChatMember) chatMember: ChatMember;
  @HasOne(() => UserSpecializationFilter) userIndustryForFiltering: UserSpecializationFilter;
  @HasOne(() => UserSpecializationFilter) userSpecializationForFiltering: UserSpecializationFilter;
  @HasMany(() => ChatMember) chatMembers: ChatMember[];
  @HasMany(() => DiscussionLike) discussionLikes: DiscussionLike[];
  @HasMany(() => DiscussionCommentLike) commentLikes: DiscussionCommentLike[];

  async passwordCompare(pwd: string): Promise<boolean> {
    if (!this.password) {
      return false;
    }

    return bcrypt.compareSync(pwd, this.password);
  }

  static async findWithEmail(email: string): Promise<User> {
    return await User.scope("withPassword").findOne({where: {["email"]: email}});
  }

  static async findWithSocialId(network: string, id: string): Promise<User> {
    return await User.scope("withPassword").findOne({
      where: {
        [`settings.social.${network}.id`]: id
      }
    });
  }

  isTOTPEnabled(): boolean {
    return this.settings.security.TOTP.active;
  }
}
