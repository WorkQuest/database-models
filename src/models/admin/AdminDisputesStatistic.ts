import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {Admin} from './Admin';

@Table
export class AdminDisputesStatistic extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => Admin) @Column({ type: DataType.STRING, allowNull: false }) adminId: string;

  @Column({type: DataType.INTEGER, defaultValue: 0}) resolvedDisputes: number;
  @Column({type: DataType.DATE, defaultValue: null }) averageResolutionTime:number;

  @BelongsTo(() => Admin) admin: Admin;
}
