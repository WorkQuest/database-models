import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {User} from './User';

/**Take a part into sorting inside a*/
export enum RatingStatus {
  topRanked = 0,
  reliable = 1,
  verified = 2,
  noStatus = 3,
}

@Table
export class RatingStatistic extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column({ type: DataType.STRING, allowNull: false }) userId: string;

  @Column({type: DataType.INTEGER, defaultValue: 0 }) reviewCount: number;
  @Column({type: DataType.DOUBLE, defaultValue: null }) averageMark: number;

  @Column({type: DataType.INTEGER, defaultValue: RatingStatus.noStatus }) status: RatingStatus;

  @BelongsTo(() => User) user: User;
}
