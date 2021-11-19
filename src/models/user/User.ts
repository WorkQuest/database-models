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
import {error, getUUID} from "../../utils";
import * as bcrypt from "bcrypt";
import {Media} from "../Media";
import {Session} from "./Session";
import {Errors} from "../../utils/errors";
import {Review} from "../quest/Review";
import {RatingStatistic} from "./RatingStatistic";
import {ChatMember} from "../chats/ChatMember";
import {LocationPostGISType, LocationType} from "../types";
import {UserSpecializationFilter} from "./UserSpecializationFilter";
import {DiscussionLike} from "../discussion/DiscussionLike";
import {DiscussionCommentLike} from "../discussion/DiscussionCommentLike";
import {Chat} from "../chats/Chat";

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

export enum UserStatus {
  Unconfirmed,
  Confirmed,
  NeedSetRole,
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
  secondMobileNumber: string | null;
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
  skills: string[];
  educations: Knowledge[] | null;
  workExperiences: WorkExperience[] | null;
  wage: string;
}

export interface AdditionalInfoEmployer extends AdditionalInfo {
  company: string | null;
  CEO: string | null;
  website: string | null;
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["password", "settings", "tempPhone", "createdAt", "updatedAt", "deletedAt", "locationPostGIS"]
    },
    include: [{
      model: Media.scope('urlOnly'),
      as: 'avatar'
    }, {
      model: RatingStatistic,
      as: 'ratingStatistic'
    }, {
      model: UserSpecializationFilter,
      as: 'userSpecializations',
      attributes: ['path'],
    }]
  },
  withPassword: {
    attributes: {
      include: ["password", "settings", "tempPhone"],
      exclude: ["locationPostGIS"],
    }
  },
  short: {
    attributes: ["id", "firstName", "lastName"],
    include: [{
      model: Media.scope('urlOnly'),
      as: 'avatar'
    }]
  },
  shortWithAdditionalInfo: {
    attributes: ["id", "firstName", "lastName", "additionalInfo"],
    include: [{
      model: Media.scope('urlOnly'),
      as: 'avatar'
    }]
  }
}))
@Table({ paranoid: true })
export class User extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => Media)
  @Column({type: DataType.STRING, defaultValue: null}) avatarId: string;

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

  @Column(DataType.STRING) firstName: string;
  @Column(DataType.STRING) lastName: string;
  @Column({type: DataType.JSONB, defaultValue: {}}) additionalInfo: object;

  @Column({type: DataType.STRING, unique: true}) email: string;
  @Column({type: DataType.STRING, defaultValue: null}) role: UserRole;
  @Column({type: DataType.JSONB, defaultValue: defaultUserSettings}) settings: UserSettings;
  @Column({type: DataType.INTEGER, defaultValue: UserStatus.Unconfirmed}) status: UserStatus;
  @Column({type: DataType.INTEGER, defaultValue: StatusKYC.Unconfirmed}) statusKYC: StatusKYC;

  @Column({type: DataType.STRING, defaultValue: null}) tempPhone: string;
  @Column({type: DataType.STRING, defaultValue: null}) phone: string;

  @Column(DataType.JSONB) location: LocationType;
  // @Column(DataType.STRING) locationPlaceName: string; TODO
  @Column(DataType.GEOMETRY('POINT', 4326)) locationPostGIS: LocationPostGISType;

  @BelongsTo(() => Media,{constraints: false, foreignKey: 'avatarId'}) avatar: Media;

  @HasOne(() => RatingStatistic) ratingStatistic: RatingStatistic;

  @HasMany(() => Session) sessions: Session[];
  @HasMany(() => Review, 'toUserId') reviews: Review[];
  @HasMany(() => Media, {constraints: false}) medias: Media[];
  @HasMany(() => UserSpecializationFilter) userSpecializations: UserSpecializationFilter[];

  /** Aliases for query */
  @HasOne(() => Chat) chatOfUser: Chat;
  @HasOne(() => ChatMember) chatMember: ChatMember;
  @HasOne(() => UserSpecializationFilter) userIndustryForFiltering: UserSpecializationFilter;
  @HasOne(() => UserSpecializationFilter) userSpecializationForFiltering: UserSpecializationFilter;
  @HasMany(() => Chat) chatsOfUser: Chat[];
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
    return await User.scope("withPassword").findOne({ where: { ["email"]: email } });
  }

  static async findWithSocialId(network: string, id: string): Promise<User> {
    return await User.scope("withPassword").findOne({
      where: {
        [`settings.social.${network}.id`]: id
      }
    });
  }

  static async userMustExist(userId: string) {
    if (!await User.findByPk(userId)) {
      throw error(Errors.NotFound, "User does not exist", { userId });
    }
  }

  static async usersMustExist(userIds: string[]) {
    for (const id of userIds) {
      await User.userMustExist(id);
    }
  }

  isTOTPEnabled(): boolean {
    return this.settings.security.TOTP.active;
  }
}
