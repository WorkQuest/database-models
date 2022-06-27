import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { getUUID } from '../../utils';
import {Message} from "./Message";
import {User} from "../user/User";
import {Admin} from "../admin/Admin";

@Table
export class StarredMessage extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column(DataType.STRING) userId: string;

  @ForeignKey(() => Admin)
  @Column(DataType.STRING) adminId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, allowNull: false}) messageId: string;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Admin) admin: Admin;
  @BelongsTo(() => Message, { constraints: false }) message: Message;
}

