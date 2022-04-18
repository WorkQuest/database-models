import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo, Scopes,
} from "sequelize-typescript";
import { Message } from "./Message";
import { getUUID } from "../../utils";
import {Chat} from "./Chat";
import {QuestChat} from "./QuestChat";
import {GroupChat} from "./GroupChat";

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["messages", "updatedAt"]
    },
    include: [{
      model: Message,
      as: 'lastMessage'
    }]
  }
}))

@Table
export class ChatData extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, defaultValue: null}) lastMessageId: string;

  @BelongsTo(() => Message, { foreignKey: 'lastMessageId', constraints: false }) lastMessage: Message;

  @BelongsTo(() => Chat) chat: Chat;
}