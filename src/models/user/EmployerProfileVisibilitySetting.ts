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
import {RatingStatus} from "../types";

@Table
export class EmployerProfileVisibilitySetting extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({type: DataType.INTEGER, defaultValue: RatingStatus.AllStatuses }) ratingStatusCanRespondOnQuest: RatingStatus;
  @Column({type: DataType.INTEGER, defaultValue: RatingStatus.AllStatuses }) ratingStatusInMySearch: RatingStatus;

  @BelongsTo(() => User) user: User;
}