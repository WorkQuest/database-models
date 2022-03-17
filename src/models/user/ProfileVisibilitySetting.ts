import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import { getUUID } from '../../utils';
import { User } from './User';
import { Priority } from "../types";

export enum NetworkProfileVisibility {
  EveryoneOnTheInternet = 0,
  RegisteredUsers = 1,
  SubmittingOffer = 2,
}

@Table
export class ProfileVisibilitySetting extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({type: DataType.INTEGER, defaultValue: NetworkProfileVisibility.EveryoneOnTheInternet }) networkProfileVisibility: NetworkProfileVisibility;
  @Column({type: DataType.INTEGER, defaultValue: Priority.AllPriority }) jobPriorityProfileVisibility: Priority;

  @BelongsTo(() => User) user: User;
}
