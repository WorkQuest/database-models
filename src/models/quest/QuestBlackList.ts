import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {Quest} from './Quest';
import {Admin} from "../admin/Admin";
import {BlackListStatus} from "../types";

@Table
export class QuestBlackList extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Admin) @Column({type: DataType.STRING, allowNull: false}) adminId: string;
  @ForeignKey(() => Quest) @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @Column({type: DataType.STRING, allowNull: false}) reason: string;
  @Column({type: DataType.INTEGER, defaultValue: BlackListStatus.Blocked}) status: BlackListStatus;


  @BelongsTo(() => Admin, { constraints: false }) admin: Admin;
  @BelongsTo(() => Quest, { constraints: false }) quest: Quest;
}

