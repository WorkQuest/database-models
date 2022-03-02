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
  @Column({type: DataType.STRING, allowNull: false}) lastReadMessageId: string;

  @BelongsTo(() => Message) message: Message;
  @BelongsTo(() => ChatMember) member: ChatMember;
}
