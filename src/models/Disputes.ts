import {Column, DataType, Model, Scopes, Table, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { getUUID, error } from '../utils';
import {User} from "./User";
import {Quest} from "./Quest";
import {AdminRole} from "./Admin";

export enum DisputeStatus {
  active = "active",
  resolved = "resolved"
}
export const DisputeStatuses = Object.values(DisputeStatus)


@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["password", "settings", "createdAt", "updatedAt", "deletedAt"],
    },
  },
  withPassword: {
    attributes: {
      include: ["password", "settings"],
    },
  },
}))
@Table({paranoid: true})
export class Disputes extends Model {
  @Column({ type: DataType.STRING, defaultValue: getUUID, primaryKey: true }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, unique: true}) employerId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, unique: true}) workerId: string;

  @ForeignKey(() => Quest)
  @Column(DataType.STRING) questId: string;

  @Column({type: DataType.STRING, defaultValue: DisputeStatus.active}) status: DisputeStatus;

  @Column(DataType.STRING) problem: string;
  @Column(DataType.STRING) decision: string;

  @BelongsTo(() => User, 'employerId') employer: User;
  @BelongsTo(() => User, 'workerId') worker: User;
  @BelongsTo(() => Quest, 'questId') quest: Quest;

}
