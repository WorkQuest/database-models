import {getUUID, getUUIDInt} from '../../utils';
import {User} from "../user/User";
import {Media} from '../Media';
import {QuestMedia} from './QuestMedia';
import {Review} from './Review';
import {QuestsResponse} from "./QuestsResponse";
import {StarredQuests} from './StarredQuests';
import {LocationPostGISType, LocationType, Priority, WorkPlace} from "../types";
import {QuestSpecializationFilter} from './QuestSpecializationFilter';
import {QuestChat} from "../chats/QuestChat";
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
import {QuestDispute} from "./QuestDispute";

export enum AdType {
  Free = 0,
  Paid,
}

export enum QuestStatus {
  Dispute = -2,
  Blocked = -1,
  Pending = 0,                               /** The quest has been created. The event about creating the quest is expected on the side of the quest factory.                       */
  Recruitment = 1,                           /** Recruitment of workers for the quest. See QuestResponse and flow response/invite on quest.                                         */
  WaitingForConfirmFromWorkerOnAssign = 2,   /** The employer has selected a worker to complete the quest and is waiting for confirmation from the worker.                          */
  WorkerAcceptedQuestAssignment = 3,         /** The worker accepted the quest assignment. The employer is expected to appoint an employee on the smart contract side of the quest. */
  ExecutionOfWork = 4,                       /**  */
  WaitingEmployerConfirm = 5,                /** WaitConfirm */
  Completed = 6,                             /** Done */
  Closed = 7,
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
  QuestStatus.WaitingForConfirmFromWorkerOnAssign,
  QuestStatus.WorkerAcceptedQuestAssignment,
  QuestStatus.ExecutionOfWork,
  QuestStatus.WaitingEmployerConfirm,
];

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["locationPostGIS", "updatedAt"]
    },
    include: [{
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
    }]
  }
}))
@Table({paranoid: true})
export class Quest extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, defaultValue: null}) assignedWorkerId: string;

  @Column({type: DataType.STRING, allowNull: false}) title: string;
  @Column(DataType.TEXT) description: string;

  @Column({ type: DataType.DECIMAL, defaultValue: () => getUUIDInt(), unique: true }) nonce: string;

  @Column({type: DataType.INTEGER, defaultValue: QuestStatus.Pending }) status: QuestStatus;
  @Column({type: DataType.STRING, allowNull: false}) workplace: WorkPlace;
  @Column({type: DataType.STRING, allowNull: false}) employment: QuestEmployment;
  @Column({type: DataType.INTEGER, defaultValue: Priority.AllPriority}) priority: Priority;
  @Column({type: DataType.STRING, allowNull: false}) category: string;

  @Column({type: DataType.STRING, allowNull: false}) locationPlaceName: string;
  @Column({type: DataType.JSONB, allowNull: false}) location: LocationType;
  @Column({type: DataType.GEOMETRY('POINT', 4326)}) locationPostGIS: LocationPostGISType;

  @Column({type: DataType.DECIMAL, allowNull: false}) price: string;
  @Column({type: DataType.INTEGER, defaultValue: AdType.Free }) adType: AdType;

  @Column(DataType.DATE) startedAt: Date;

  @BelongsTo(() => User, 'userId') user: User;
  @BelongsTo(() => User, 'assignedWorkerId') assignedWorker: User;
  @BelongsToMany(() => Media, () => QuestMedia) medias: Media[];

  @HasOne(() => QuestChat) questChat: QuestChat;
  @HasOne(() => StarredQuests) star: StarredQuests;
  @HasOne(() => QuestsResponse) response: QuestsResponse;
  @HasOne(() => QuestsResponse) responded: QuestsResponse;                                              /** Alias for filter in get quests */
  @HasOne(() => QuestsResponse) invited: QuestsResponse;                                                /** Alias for filter get quests */
  @HasOne(() => QuestSpecializationFilter) questIndustryForFiltering: QuestSpecializationFilter;        /** */
  @HasOne(() => QuestSpecializationFilter) questSpecializationForFiltering: QuestSpecializationFilter;  /** */
  @HasOne(() => Review) yourReview: Review;                                                             /** Alias for get review from user when get all quest */
  @HasOne(() => QuestDispute) openDispute: QuestDispute;

  @HasMany(() => QuestSpecializationFilter) questSpecializations: QuestSpecializationFilter[];
  @HasMany(() => QuestDispute) questDisputes: QuestDispute[];
  @HasMany(() => Review) reviews: Review[];
  @HasMany(() => StarredQuests) starredQuests: StarredQuests[];
  @HasMany(() => QuestsResponse, 'questId') responses: QuestsResponse[];
}
