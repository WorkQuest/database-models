import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {Admin} from "../admin/Admin";
import {BlackListStatus} from "../types";
import {UserStatus, User} from "./User";

@Table
export class UserBlackList extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Admin) @Column({type: DataType.STRING, allowNull: false}) adminId: string;
  @ForeignKey(() => User) @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({type: DataType.STRING, allowNull: false}) reason: string;
  @Column({type: DataType.INTEGER, defaultValue: BlackListStatus.Blocked}) status: BlackListStatus;
  @Column({type: DataType.INTEGER, allowNull: false}) previousUserStatus: UserStatus;


  @BelongsTo(() => Admin, { constraints: false }) admin: Admin;
  @BelongsTo(() => User, { constraints: false }) quest: User;
}
