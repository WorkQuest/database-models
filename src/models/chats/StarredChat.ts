import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { getUUID } from '../../utils';
import { Chat } from './Chat';
import {User} from "../user/User";
import {Admin} from "../admin/Admin";

@Table
export class StarredChat extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column(DataType.STRING) userId: string;

  @ForeignKey(() => Admin)
  @Column(DataType.STRING) adminId: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @BelongsTo(() => User) admin: User;
  @BelongsTo(() => Admin) user: Admin;
  @BelongsTo(() => Chat, { constraints: false }) chat: Chat;
}

