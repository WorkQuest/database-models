import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {Admin} from './Admin';

@Table
export class AdminQuestDisputesStatistic extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => Admin) @Column({ type: DataType.STRING, allowNull: false }) adminId: string;

  @Column({type: DataType.INTEGER, defaultValue: 0}) resolvedQuestDisputes: number;
  @Column({type: DataType.INTEGER, defaultValue: null }) averageResolutionTimeInSeconds: number;

  @BelongsTo(() => Admin) admin: Admin;
}
