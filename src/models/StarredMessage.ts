import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { getUUID } from '../utils';
import { User } from './User';
import {Message} from "./Message";

@Table
export class StarredMessage extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, allowNull: false}) messageId: string;

  @BelongsTo(() => User, { constraints: false }) user: User;
  @BelongsTo(() => Message, { constraints: false }) message: Message;
}

