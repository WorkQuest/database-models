import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {Admin} from "../admin/Admin";
import {UserStatus, User} from "./User";

export enum UserBlackListStatus {
  Blocked = 0,
  Unblocked = 1,
}

@Table
export class UserBlackList extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Admin)
  @Column({type: DataType.STRING, allowNull: false}) adminId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({type: DataType.TEXT, allowNull: false}) reason: string;

  @Column({type: DataType.INTEGER, allowNull: false}) userStatusBeforeBlocking: UserStatus;
  @Column({type: DataType.INTEGER, defaultValue: UserBlackListStatus.Blocked}) status: UserBlackListStatus;

  @Column(DataType.DATE) unlockedAt: Date;

  @BelongsTo(() => Admin, { constraints: false }) admin: Admin;
  @BelongsTo(() => User, { constraints: false }) quest: User;
}
