import { Op } from "sequelize";
import {Media} from '../Media';
import {User} from "../user/User";
import {QuestMedia} from './QuestMedia';
import {QuestsReview} from './QuestsReview';
import {QuestChat} from "../chats/QuestChat";
import {QuestRaiseView} from "../raise-view/QuestRaiseView";
import {QuestsStarred} from './QuestsStarred';
import {QuestsResponse} from "./QuestsResponse";
import {getUUID, getUUIDInt} from '../../utils';
import { DisputeStatus, QuestDispute } from "./QuestDispute";
import {QuestSpecializationFilter} from './QuestSpecializationFilter';
import {LocationPostGISType, LocationType, Priority, WorkPlace} from "../types";
import {
  Model,
  Table,
  HasOne,
  Scopes,
  Column,
  HasMany,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from 'sequelize-typescript';

export enum QuestStatus {
  Closed = -3,
  Dispute = -2,
  Blocked = -1,
  Pending = 0,                               /** The quest has been created. The event about creating the quest is expected on the side of the quest factory.   */
  Recruitment = 1,                           /** Recruitment of workers for the quest. See QuestResponse and flow response/invite on quest.                     */
  WaitingForConfirmFromWorkerOnAssign = 2,   /** The employer has selected a worker to complete the quest and is waiting for confirmation from the worker.      */
  ExecutionOfWork = 3,                       /**  */
  WaitingForEmployerConfirmationWork = 4,    /** WaitConfirm */
  Completed = 5,
}

export enum QuestEmployment {
  FullTime = 'fullTime',
  PartTime = 'partTime',
  FixedTerm = 'fixedTerm',
}

export const activeFlowStatuses = [
  QuestStatus.Dispute,
  QuestStatus.Pending,
  QuestStatus.Recruitment,
  QuestStatus.ExecutionOfWork,
  QuestStatus.WaitingForEmployerConfirmationWork,
  QuestStatus.WaitingForConfirmFromWorkerOnAssign,
];

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["locationPostGIS", "updatedAt"]
    },
    include: [{
      model: Media.scope('urlOnly'),
      as: 'avatar',
    }, {
      model: Media.scope('urlOnly'),
      as: 'medias',
      through: { attributes: [] }
    }, {
      model: User.scope('short'),
      as: 'user'
    }, {
      model: User.scope('short'),
      as: 'assignedWorker'
    }, {
      model: QuestSpecializationFilter,
      as: 'questSpecializations',
      attributes: ['path'],
    }, {
      model: QuestRaiseView,
      as: "raiseView",
      attributes: ['status', 'duration', 'type', 'endedAt'],
    }],
  },
  short: {
    attributes: [
      'id',
      'userId',
      'status',
      'assignedWorkerId',
      'title',
    ],
    include: [{
      model: User.scope('short'),
      as: 'user'
    }, {
      model: User.scope('short'),
      as: 'assignedWorker'
    }, {
      model: QuestDispute.unscoped(),
      as: 'openDispute',
      required: false,
      attributes: [
        'id',
        'openDisputeUserId',
        'opponentUserId',
        'assignedAdminId',
        'status',
      ],
      where: {
        status: {
          [Op.or]: [
            DisputeStatus.Pending,
            DisputeStatus.InProgress,
          ],
        },
      },
    }],
  }
}))
@Table({ paranoid: true })
export class Quest extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @ForeignKey(() => Media)
  @Column({type: DataType.STRING, defaultValue: null}) avatarId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, defaultValue: null}) assignedWorkerId: string;

  @Column(DataType.STRING) contractAddress: string;
  @Column({ type: DataType.DECIMAL, defaultValue: () => getUUIDInt(), unique: true }) nonce: string;

  @Column({type: DataType.INTEGER, defaultValue: QuestStatus.Pending }) status: QuestStatus;

  @Column({type: DataType.STRING, allowNull: false}) title: string;
  @Column({type: DataType.TEXT, allowNull: false}) description: string;
  @Column({type: DataType.DECIMAL, allowNull: false}) price: string;
  @Column({type: DataType.STRING, allowNull: false}) workplace: WorkPlace;
  @Column({type: DataType.STRING, allowNull: false}) employment: QuestEmployment;
  @Column({type: DataType.INTEGER, defaultValue: Priority.AllPriority}) priority: Priority;

  @Column({type: DataType.JSONB, allowNull: false}) location: LocationType;
  @Column({type: DataType.STRING, allowNull: false}) locationPlaceName: string;
  @Column({type: DataType.GEOMETRY('POINT', 4326)}) locationPostGIS: LocationPostGISType;

  @Column(DataType.DATE) startedAt: Date;

  @BelongsTo(() => User, 'userId') user: User;
  @BelongsTo(() => User, 'assignedWorkerId') assignedWorker: User;
  @BelongsTo(() => Media, {constraints: false, foreignKey: 'avatarId'}) avatar: Media;

  @BelongsToMany(() => Media, () => QuestMedia) medias: Media[];

  @HasOne(() => QuestChat) questChat: QuestChat;
  @HasOne(() => QuestsStarred) star: QuestsStarred;
  @HasOne(() => QuestsResponse) response: QuestsResponse;
  @HasOne(() => QuestsResponse) responded: QuestsResponse;                                              /** Alias for filter in get quests */
  @HasOne(() => QuestsResponse) invited: QuestsResponse;                                                /** Alias for filter get quests */
  @HasOne(() => QuestSpecializationFilter) questIndustryForFiltering: QuestSpecializationFilter;        /** */
  @HasOne(() => QuestSpecializationFilter) questSpecializationForFiltering: QuestSpecializationFilter;  /** */
  @HasOne(() => QuestRaiseView) raiseView: QuestRaiseView;                                              /** Alias for get review from user when get all quest */
  @HasOne(() => QuestsReview) yourReview: QuestsReview;                                                 /** Alias for get review from user when get all quest */
  @HasOne(() => QuestDispute) openDispute: QuestDispute;                                                /** Alias for get review from user when get all quest */

  @HasMany(() => QuestSpecializationFilter) questSpecializations: QuestSpecializationFilter[];
  @HasMany(() => QuestDispute) questDisputes: QuestDispute[];
  @HasMany(() => QuestsReview) reviews: QuestsReview[];
  @HasMany(() => QuestsStarred) starredQuests: QuestsStarred[];
  @HasMany(() => QuestsResponse, 'questId') responses: QuestsResponse[];
}
