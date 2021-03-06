import {Column, DataType, Model, Scopes, Table, HasOne, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {User} from "../user/User";
import {Quest, QuestStatus} from "./Quest";
import {Admin} from "../admin/Admin";
import { QuestChat } from "../chats/QuestChat";
import { QuestDisputeReview } from "./QuestDisputeReview";

export enum DisputeStatus {
  Pending = 0,
  Created = 1,
  InProgress = 2,
  PendingClosed = 3,
  Closed = 4,
}

export enum DisputeReason {
  NoAnswer = "NoAnswer",
  AnotherReason = "AnotherReason",
  PoorlyDoneJob = "PoorlyDoneJob",
  AdditionalRequirement = "AdditionalRequirement",
  RequirementDoesNotMatch = "RequirementDoesNotMatch",
  NoConfirmationOfComplete = "NoConfirmationOfComplete",
}

export enum DisputeDecision {
  Rework = 'Rework',
  AcceptWork = 'AcceptWork',
  RejectWork = 'RejectWork',
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["createdAt", "updatedAt", "deletedAt"]
    },
    include: [{
      model: User.scope('shortForList'),
      as: 'openDisputeUser'
    }, {
      model: User.scope('shortForList'),
      as: 'opponentUser'
    }, {
      model: Admin.scope('short'),
      as: 'assignedAdmin'
    }, {
      model: Quest,
      as: 'quest',
      include: [{
        model: QuestChat.unscoped(),
        as: 'questChat',
        attributes: ["chatId", "status"],
      }],
    }]
  }
}))
@Table({ paranoid: true })
export class QuestDispute extends Model {
  @Column({ type: DataType.STRING, defaultValue: getUUID, primaryKey: true }) id: string;

  @ForeignKey(() => Quest)
  @Column({ type: DataType.STRING, allowNull: false }) questId: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) openDisputeUserId: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) opponentUserId: string;

  @ForeignKey(() => Admin)
  @Column(DataType.STRING) assignedAdminId: string;

  @Column({ type: DataType.INTEGER, autoIncrement: true }) number: number;
  @Column({ type: DataType.INTEGER, allowNull: false }) openOnQuestStatus: QuestStatus;
  @Column({ type: DataType.INTEGER, defaultValue: DisputeStatus.Pending }) status: DisputeStatus;
  @Column({ type: DataType.STRING, defaultValue: DisputeReason.AnotherReason }) reason: DisputeReason;

  @Column({ type: DataType.TEXT, allowNull: false }) problemDescription: string;
  @Column(DataType.TEXT) decisionDescription: string;
  @Column(DataType.STRING) decision: DisputeDecision;

  @Column(DataType.DATE) acceptedAt: Date;
  @Column(DataType.DATE) resolvedAt: Date;

  @HasOne(() => QuestDisputeReview) currentUserDisputeReview: QuestDisputeReview;

  @BelongsTo(() => User, 'openDisputeUserId') openDisputeUser: User;
  @BelongsTo(() => User, 'opponentUserId') opponentUser: User;
  @BelongsTo(() => Admin, 'assignedAdminId') assignedAdmin: Admin;
  @BelongsTo(() => Quest, 'questId') quest: Quest;
}
