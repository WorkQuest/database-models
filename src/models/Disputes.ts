import {Column, DataType, Model, Scopes, Table, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { getUUID, error } from '../utils';
import {User} from "./User";
import {Quest} from "./Quest";
import {Errors} from "../utils/errors";

export enum DisputeStatus {
  pending  = "pending",
  in_progress = "in_progress",
  completed = "completed"
}
export const DisputeStatuses = Object.values(DisputeStatus)


@Table({ paranoid: true })
export class Dispute extends Model {
  @Column({ type: DataType.STRING, defaultValue: getUUID, primaryKey: true }) id: string;
  @Column({type: DataType.INTEGER, autoIncrement: true}) disputeNumber: number;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, unique: true}) openDisputeUserId: string;

  @ForeignKey(() => Quest)
  @Column(DataType.STRING) questId: string;

  @Column({type: DataType.STRING, defaultValue: DisputeStatus.pending}) status: DisputeStatus;

  @Column({type: DataType.STRING, allowNull: false}) problem: string;
  @Column({type: DataType.STRING, allowNull: false}) decision: string;

  @BelongsTo(() => User, 'openDisputeUserId') openDisputeUser: User;
  @BelongsTo(() => Quest, 'questId') quest: Quest;

  mustHaveStatus(status: DisputeStatus) {
    if (this.status !== status) {
      throw error(Errors.InvalidStatus, 'Invalid status', {});
    }
  }
}
