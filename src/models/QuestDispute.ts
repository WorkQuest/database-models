import {Column, DataType, Model, Scopes, Table, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { getUUID, error } from '../utils';
import {User} from "./user/User";
import {Quest} from "./quest/Quest";
import {Errors} from "../utils/errors";
import {Admin} from "./user/Admin";

export enum DisputeStatus {
  pending = 0,
  inProgress,
  completed,
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
      model: User,
      as: 'openDisputeUser'
    }, {
      model: User,
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
  @Column({type: DataType.INTEGER, autoIncrement: true}) disputeNumber: number;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) openDisputeUserId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) opponentUserId: string;

  @ForeignKey(() => Admin)
  @Column(DataType.STRING) resolvedByAdminId: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @Column({type: DataType.INTEGER, defaultValue: DisputeStatus.pending}) status: DisputeStatus;
  @Column({type: DataType.STRING, defaultValue: DisputeReason.anotherReason}) reason: DisputeReason;

  @Column({type: DataType.TEXT, allowNull: false}) problem: string;
  @Column(DataType.TEXT) decision: string;

  @Column(DataType.DATE) resolveAt: Date;

  @BelongsTo(() => User, 'openDisputeUserId') openDisputeUser: User;
  @BelongsTo(() => User, 'opponentUserId') opponentUser: User;
  @BelongsTo(() => Admin, 'resolvedByAdminId') resolvedByAdmin: Admin;
  @BelongsTo(() => Quest, 'questId') quest: Quest;

  mustHaveStatus(status: DisputeStatus) {
    if (this.status !== status) {
      throw error(Errors.InvalidStatus, 'Invalid status', {});
    }
  }
}
