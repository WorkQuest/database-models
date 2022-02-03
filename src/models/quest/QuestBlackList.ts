import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {Quest, QuestStatus} from './Quest';
import {Admin} from "../admin/Admin";
import {BlackListStatus} from "../types";

@Table
export class QuestBlackList extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Admin)
  @Column({type: DataType.STRING, allowNull: false}) blockedByAdminId: string;

  @ForeignKey(() => Admin)
  @Column(DataType.STRING) unblockedByAdminId: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @Column({type: DataType.TEXT, allowNull: false}) reason: string;

  @Column({type: DataType.INTEGER, allowNull: false}) questStatusBeforeBlocking: QuestStatus;
  @Column({type: DataType.INTEGER, defaultValue: BlackListStatus.Blocked}) status: BlackListStatus;

  @Column(DataType.DATE) unblockedAt: Date;

  @BelongsTo(() => Quest, { constraints: false }) quest: Quest;
  @BelongsTo(() => Admin, { constraints: false, foreignKey: 'blockedByAdminId' }) blockedByAdmin: Admin;
  @BelongsTo(() => Admin, { constraints: false, foreignKey: 'unblockedByAdminId' }) unblockedByAdmin: Admin;
}

