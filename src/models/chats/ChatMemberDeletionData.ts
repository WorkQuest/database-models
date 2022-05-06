import { Message } from "./Message";
import { getUUID } from "../../utils";
import { ChatMember } from "./ChatMember";
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

export enum ReasonForRemovingFromChat {
  Left = 'Left',
  Removed = 'Removed',
}

@Table
export class ChatMemberDeletionData extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, allowNull: false}) chatMemberId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, allowNull: false}) beforeDeletionMessageId: string;

  @Column({type: DataType.STRING, allowNull: false}) reason: ReasonForRemovingFromChat;

  @Column({type: DataType.INTEGER, allowNull: false}) beforeDeletionMessageNumber: string;

  @BelongsTo(() => ChatMember) chatMember: ChatMember;
  @BelongsTo(() => Message) beforeDeletionMessage: Message;
}
