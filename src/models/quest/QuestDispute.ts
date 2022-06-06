import {Column, DataType, Model, Scopes, Table, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {getUUID, getUUIDInt} from '../../utils';
import {User} from "../user/User";
import {Quest, QuestStatus} from "./Quest";
import {Admin} from "../admin/Admin";

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
    include: [{
      model: User.scope('short'),
      as: 'openDisputeUser'
    }, {
      model: User.scope('short'),
      as: 'opponentUser'
    }, {
      model: Quest,
      as: 'quest',
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

  @BelongsTo(() => User, 'openDisputeUserId') openDisputeUser: User;
  @BelongsTo(() => User, 'opponentUserId') opponentUser: User;
  @BelongsTo(() => Admin, 'assignedAdminId') assignedAdmin: Admin;
  @BelongsTo(() => Quest, 'questId') quest: Quest;
}
