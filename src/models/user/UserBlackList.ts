import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {Admin} from "../admin/Admin";
import {UserStatus, User} from "./User";
import {BlackListStatus} from '../types';

@Table
export class UserBlackList extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Admin)
  @Column({type: DataType.STRING, allowNull: false}) blockedByAdminId: string;

  @ForeignKey(() => Admin)
  @Column(DataType.STRING) unblockedByAdminId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({type: DataType.TEXT, allowNull: false}) reason: string;

  @Column({type: DataType.INTEGER, allowNull: false}) userStatusBeforeBlocking: UserStatus;
  @Column({type: DataType.INTEGER, defaultValue: BlackListStatus.Blocked}) status: BlackListStatus;

  @Column(DataType.DATE) unblockedAt: Date;

  @BelongsTo(() => User, { constraints: false }) user: User;
  @BelongsTo(() => Admin, { constraints: false, foreignKey: 'blockedByAdminId' }) blockedByAdmin: Admin;
  @BelongsTo(() => Admin, { constraints: false, foreignKey: 'unblockedByAdminId' }) unblockedByAdmin: Admin;
}
