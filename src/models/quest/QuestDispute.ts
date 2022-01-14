import {Column, DataType, Model, Scopes, Table, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {User} from "../user/User";
import {Quest, QuestStatus} from "./Quest";
import {Admin} from "../admin/Admin";

export enum DisputeStatus {
  pending = 0,
  inProgress,
  closed,
}

export enum DisputeReason {
  noAnswer = "noAnswer",
  poorlyDoneJob = "poorlyDoneJob",
  additionalRequirement = "additionalRequirement",
  requirementDoesNotMatch = "requirementDoesNotMatch",
  noConfirmationOfComplete = "noConfirmationOfComplete",
  anotherReason = "anotherReason",
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
      as: 'quest'
    }]
  }
}))
@Table({ paranoid: true })
export class QuestDispute extends Model {
  @Column({type: DataType.STRING, defaultValue: getUUID, primaryKey: true}) id: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) openDisputeUserId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) opponentUserId: string;

  @ForeignKey(() => Admin)
  @Column(DataType.STRING) assignedAdminId: string;

  @Column({type: DataType.INTEGER, autoIncrement: true}) disputeNumber: number;
  @Column({type: DataType.INTEGER, defaultValue: DisputeStatus.pending}) status: DisputeStatus;
  @Column({type: DataType.STRING, defaultValue: DisputeReason.anotherReason}) reason: DisputeReason;

  @Column({type: DataType.INTEGER, allowNull: false}) openOnQuestStatus: QuestStatus;

  @Column({type: DataType.TEXT, allowNull: false}) problemDescription: string;
  @Column(DataType.TEXT) decisionDescription: string;

  @Column(DataType.DATE) resolveAt: Date;

  @BelongsTo(() => User, 'openDisputeUserId') openDisputeUser: User;
  @BelongsTo(() => User, 'opponentUserId') opponentUser: User;
  @BelongsTo(() => Admin, 'assignedAdminId') assignedAdmin: Admin;
  @BelongsTo(() => Quest, 'questId') quest: Quest;
}
