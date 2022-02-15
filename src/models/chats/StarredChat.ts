import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { getUUID } from '../../utils';
import { Chat } from './Chat';
import {ChatMember} from "./ChatMember";

@Table
export class StarredChat extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, allowNull: false}) memberId: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @BelongsTo(() => ChatMember, { constraints: false }) member: ChatMember;
  @BelongsTo(() => Chat, { constraints: false }) chat: Chat;
}

