import {
  BelongsTo,
  HasMany,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Scopes,
  Table,
  HasOne
} from 'sequelize-typescript';
import {error, getUUID, transformToGeoPostGIS} from '../../utils';
import {User} from "../user/User";
import {Media} from '../Media';
import {QuestMedia} from './QuestMedia';
import {Errors} from '../../utils/errors';
import {Review} from './Review';
import {QuestsResponse} from "./QuestsResponse";
import {StarredQuests} from './StarredQuests';
import {SkillFilter, SkillsMap, SkillsRaw} from "../SkillFilter";
import {LocationPostGISType, LocationType} from "../types";

export enum QuestPriority {
  AllPriority = 0,
  Low,
  Normal,
  Urgent,
}

export enum AdType {
  Free = 0,
  Paid,
}

export enum QuestStatus {
  Created = 0,
  Active,
  Closed,
  Reject,
  Dispute,
  WaitWorker,
  WaitConfirm,
  Done,
  isBlocked,
  Prolonged,
}

export enum QuestWorkPlace {
  Distant = "distant",
  Office = "office",
  Both = "both",
}

export enum QuestEmployment {
  FullTime = 'fullTime',
  PartTime = 'partTime',
  FixedTerm = 'fixedTerm',
}

export interface Location {
  longitude: number;
  latitude: number;
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["locationPostGIS", "updatedAt"]
    },
    include: [{
      model: Media.scope('urlOnly'),
      as: 'medias',
      through: {
        attributes: []
      }
    }, {
      model: User.scope('short'),
      as: 'user'
    }, {
      model: User.scope('short'),
      as: 'assignedWorker'
    }, {
      model: SkillFilter,
      as: 'questSkillFilters',
      attributes: ["category", "skill"]
    }]
  }
}))
@Table
export class Quest extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, defaultValue: null}) assignedWorkerId: string;

  @Column({type: DataType.STRING, allowNull: false}) title: string;
  @Column(DataType.TEXT) description: string;

  @Column({type: DataType.INTEGER, defaultValue: QuestStatus.Created }) status: QuestStatus;
  @Column({type: DataType.STRING, allowNull: false}) workplace: QuestWorkPlace;
  @Column({type: DataType.STRING, allowNull: false}) employment: QuestEmployment;
  @Column({type: DataType.INTEGER, defaultValue: QuestPriority.AllPriority}) priority: QuestPriority;
  @Column({type: DataType.STRING, allowNull: false}) category: string;

  @Column({type: DataType.STRING, allowNull: false}) locationPlaceName: string;
  @Column({type: DataType.JSONB, allowNull: false}) location: LocationType;
  @Column({type: DataType.GEOMETRY('POINT', 4326)}) locationPostGIS: LocationPostGISType;

  @Column({type: DataType.DECIMAL, allowNull: false}) price: string;
  @Column({type: DataType.INTEGER, defaultValue: AdType.Free }) adType: AdType;
  @Column(DataType.TEXT) blockReason: string;


  @Column({
    type: DataType.VIRTUAL,
    get() {
      const questSkillFilters: SkillsRaw[] = this.getDataValue('questSkillFilters');

      return (questSkillFilters ? SkillFilter.toMapSkills(questSkillFilters) : undefined);
    },
    set (_) { }
  }) skillFilters?: SkillsMap;

  @BelongsToMany(() => Media, () => QuestMedia) medias: Media[];

  @BelongsTo(() => User, 'userId') user: User;
  @BelongsTo(() => User, 'assignedWorkerId') assignedWorker: User;

  @HasOne(() => StarredQuests) star: StarredQuests;
  @HasOne(() => QuestsResponse) response: QuestsResponse;
  @HasOne(() => SkillFilter) filterBySkillFilter: SkillFilter; /** Alias */
  @HasMany(() => StarredQuests) starredQuests: StarredQuests[];
  @HasMany(() => QuestsResponse, 'questId') responses: QuestsResponse[];
  @HasMany(() => Review) reviews: Review[];
  @HasMany(() => SkillFilter) questSkillFilters: SkillFilter[];

  updateFieldLocationPostGIS(): void {
    this.setDataValue('locationPostGIS', transformToGeoPostGIS(this.getDataValue('location')));
  }

  mustHaveStatus(...statuses: QuestStatus[]) {
    if (!statuses.includes(this.status)) {
      throw error(Errors.InvalidStatus, "Quest status doesn't match", {
        current: this.status,
        mustHave: statuses
      });
    }
  }

  mustBeAppointedOnQuest(workerId: string) {
    if (this.assignedWorkerId !== workerId) {
      throw error(Errors.Forbidden, "Worker is not appointed on quest", {
        current: this.userId,
        mustHave: workerId
      });
    }
  }

  mustBeQuestCreator(userId: String) {
    if (this.userId !== userId) {
      throw error(Errors.Forbidden, "User is not quest creator", {
        current: this.userId,
        mustHave: userId
      });
    }
  }

  mustBeQuestWorker(userId: String) {
    if (this.assignedWorkerId !== userId) {
      throw error(Errors.Forbidden, "User is not work on quest", {
        current: this.userId,
        mustHave: userId
      });
    }
  }

  mustBeUnblock(status: QuestStatus) {
    if (this.status === QuestStatus.isBlocked) {
      throw error(Errors.IsBlocked, 'Quest is blocked', {});
    }
  }
}
