import { Chat } from "./Chat";
import { Message } from "./Message";
import { getUUID } from "../../utils";
import { ChatMember } from "./ChatMember";
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey, Scopes,
} from "sequelize-typescript";

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: []
    },
    include: [{
      model: Message,
      as: 'beforeDeletionMessage'
    }]
  },
}))
@Table
export class ChatDeletionData extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, allowNull: false}) chatMemberId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, allowNull: false}) beforeDeletionMessageId: string;

  @Column({type: DataType.INTEGER, allowNull: false}) beforeDeletionMessageNumber: string;

  @BelongsTo(() => Chat) chat: Chat;
  @BelongsTo(() => ChatMember) chatMember: ChatMember;
  @BelongsTo(() => Message) beforeDeletionMessage: Message;
}
