import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { getUUID } from "../../utils";

@Table
export class ChatMemberData extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, allowNull: false}) chatMemberId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, }) lastReadMessageId: string;

  /** Metadata */
  @Column({type: DataType.INTEGER, defaultValue: 0}) unreadCountMessages: number;
  @Column({type: DataType.INTEGER, }) lastReadMessageNumber: number;

  @BelongsTo(() => Message) lastReadMessage: Message;
  @BelongsTo(() => ChatMember) chatMember: ChatMember;
}
