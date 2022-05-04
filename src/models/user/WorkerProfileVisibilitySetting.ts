import { User } from './User';
import { getUUID } from '../../utils';
import { RatingStatus } from "../types";
import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class WorkerProfileVisibilitySetting extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) userId: string;

  @Column({ type: DataType.INTEGER, defaultValue: RatingStatus.AllStatuses }) ratingStatusCanInviteMeOnQuest: number;
  @Column({ type: DataType.INTEGER, defaultValue: RatingStatus.AllStatuses }) ratingStatusInMySearch: number;

  @BelongsTo(() => User) user: User;
}
