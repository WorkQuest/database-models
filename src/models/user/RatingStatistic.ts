import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {User} from './User';
import {RatingStatus} from "../types";

@Table
export class RatingStatistic extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column({ type: DataType.STRING, allowNull: false }) userId: string;

  @Column({type: DataType.INTEGER, defaultValue: 0 }) reviewCount: number;
  @Column({type: DataType.DOUBLE, defaultValue: null }) averageMark: number;

  @Column({type: DataType.INTEGER, defaultValue: RatingStatus.noStatus }) status: RatingStatus;

  @BelongsTo(() => User) user: User;
}
