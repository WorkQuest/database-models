import {getUUID} from "../../utils";
import * as bcrypt from "bcrypt";
import {Media} from "../Media";
import {Session} from "./Session";
import {Review} from "../quest/Review";
import {RatingStatistic} from "./RatingStatistic";
import {ChatMember} from "../chats/ChatMember";
import {LocationPostGIS, Location, Priority, WorkPlace} from "../types";
import {UserSpecializationFilter} from "./UserSpecializationFilter";
import {DiscussionLike} from "../discussion/DiscussionLike";
import {DiscussionCommentLike} from "../discussion/DiscussionCommentLike";
import {Chat} from "../chats/Chat";
import {QuestsStatistic} from "../quest/QuestsStatistic";
import {Wallet} from "../wallet/Wallet";
import {ChatsStatistic} from "../chats/ChatsStatistic";
import {UserRole, UserSettings, UserStatus, StatusKYC} from "./types";
import {
  Column,
  Model,
  Table,
  Scopes,
  HasOne,
  HasMany,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

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

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["password", "settings", "tempPhone", "updatedAt", "deletedAt", "locationPostGIS", "delegate"]
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
    }, {
      model: QuestsStatistic,
      as: 'questsStatistic',
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
    }, {
      model: RatingStatistic,
      as: 'ratingStatistic'
    }]
  },
  shortWithAdditionalInfo: {
    attributes: ["id", "firstName", "lastName", "additionalInfo"],
    include: [{
      model: Media.scope('urlOnly'),
      as: 'avatar'
    }, {
      model: RatingStatistic,
      as: 'ratingStatistic'
    }]
  },
}))
@Table({ paranoid: true })
export class User extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => Media)
  @Column({type: DataType.STRING, defaultValue: null}) avatarId: string;

  /** User profile */
  @Column(DataType.STRING) firstName: string;
  @Column(DataType.STRING) lastName: string;
  @Column(DataType.JSONB) location: Location;
  // @Column(DataType.STRING) locationPlaceName: string; TODO
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
  @Column({type: DataType.STRING, defaultValue: null}) phone: string;
  @Column({type: DataType.STRING, defaultValue: null}) tempPhone: string;
  @Column({type: DataType.JSONB, defaultValue: defaultUserSettings}) settings: UserSettings;
  @Column({type: DataType.INTEGER, defaultValue: UserStatus.Unconfirmed}) status: UserStatus;
  @Column({type: DataType.INTEGER, defaultValue: StatusKYC.Unconfirmed}) statusKYC: StatusKYC;

  /** Worker: priority list for quests */
  @Column({type: DataType.DECIMAL, defaultValue: null}) wagePerHour: string;
  @Column({type: DataType.STRING, defaultValue: null}) workplace: WorkPlace;
  @Column({type: DataType.INTEGER, defaultValue: Priority.AllPriority}) priority: Priority;

  /** PostGIS */
  @Column(DataType.GEOMETRY('POINT', 4326)) locationPostGIS: LocationPostGIS;

  /** Statistic */
  @HasOne(() => RatingStatistic) ratingStatistic: RatingStatistic;
  @HasOne(() => QuestsStatistic) questsStatistic: QuestsStatistic;

  @BelongsTo(() => Media,{constraints: false, foreignKey: 'avatarId'}) avatar: Media;

  @HasMany(() => Session) sessions: Session[];
  @HasMany(() => Review, 'toUserId') reviews: Review[];
  @HasMany(() => Media, {constraints: false}) medias: Media[];
  @HasMany(() => UserSpecializationFilter) userSpecializations: UserSpecializationFilter[];

  /** Wallet */
  @HasOne(() => Wallet) wallet: Wallet;

  /** Aliases for query */
  @HasOne(() => Chat) chatOfUser: Chat;
  @HasOne(() => ChatsStatistic) chatStatistic: ChatsStatistic;
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

  isTOTPEnabled(): boolean {
    return this.settings.security.TOTP.active;
  }
}
