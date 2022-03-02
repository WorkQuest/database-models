import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from "sequelize-typescript";
import { Message } from "./Message";
import { getUUID } from "../../utils";
import {Chat} from "./Chat";

@Table
export class ChatData extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, defaultValue: null}) lastMessageId: string;

  @BelongsTo(() => Chat) chat: Chat;
  @BelongsTo(() => Message) message: Message;
}
