import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";
import { User } from "../user/User";
import { Chat } from "./Chat";
import {Message} from "./Message";

@Scopes(() => ({
  userOnly: {
    attributes: {
      exclude: ['id', 'chatId','createdAt', 'updatedAt']
    },
    include: [{
      model: User.scope('shortWithAdditionalInfo'),
      as: 'user'
    }]
  },
  userIdsOnly: {
    attributes: {
      exclude: [
        'id',
        'chatId',
        'createdAt',
        'updatedAt',
        'unreadCountMessages',
      ]
    },
  }
}))
@Table
export class ChatMember extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "Chats", key: "id" }}) chatId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "Users", key: "id" }}) userId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, references: { model: "Messages", key: "id" }}) lastReadMessageId: string;

  /** Metadata */
  @Column({type: DataType.INTEGER, defaultValue: 0}) unreadCountMessages: number;
  @Column({type: DataType.INTEGER, }) lastReadMessageNumber: number;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Chat) chat: Chat;
}
