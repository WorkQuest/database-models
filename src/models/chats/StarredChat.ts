import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { getUUID } from '../../utils';
import { User } from '../user/User';
import { Chat } from './Chat';

@Table
export class StarredChat extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "Users", key: "id" }}) userId: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "Chats", key: "id" }}) chatId: string;

  @BelongsTo(() => User, { constraints: false }) user: User;
  @BelongsTo(() => Chat, { constraints: false }) chat: Chat;
}

