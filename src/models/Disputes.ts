import {Column, DataType, Model, Scopes, Table, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { getUUID, error } from '../utils';
import {User} from "./User";
import {Quest} from "./Quest";
import {Media} from "./Media";

export enum DisputeStatus {
  pending  = "pending",
  completed = "completed"
}
export const DisputeStatuses = Object.values(DisputeStatus)


@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["locationPostGIS"]
    },
    include: [{
      model: Media.scope('urlOnly'),
      as: 'medias',
      through: {
        attributes: []
      }
    }, {
      model: User,
      as: 'user'
    }, {
      model: User,
      as: 'assignedWorker'
    }]
  }
}))
@Table
export class Disputes extends Model {
  @Column({ type: DataType.STRING, defaultValue: getUUID, primaryKey: true }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, unique: true}) userId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, unique: true}) assignedWorkerId: string;

  @ForeignKey(() => Quest)
  @Column(DataType.STRING) questId: string;

  @Column({type: DataType.STRING, defaultValue: DisputeStatus.pending}) status: DisputeStatus;

  @Column(DataType.STRING) problem: string;
  @Column(DataType.STRING) decision: string;

  @BelongsTo(() => User, 'userId') user: User;
  @BelongsTo(() => User, 'assignedWorkerId') assignedWorker: User;
  @BelongsTo(() => Quest, 'questId') quest: Quest;

}
