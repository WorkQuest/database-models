import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
  BelongsToMany,
  Scopes,
  HasOne
} from "sequelize-typescript";
import { getUUID } from "../../utils";
import { Chat } from "./Chat";
import { Media } from "../Media";
import { MessageMedia } from "./MessageMedia";
import { InfoMessage } from "./InfoMessage";
import { StarredMessage } from "./StarredMessage";
import {ChatMember} from "./ChatMember";
import {ChatData} from "./ChatData";

export enum MessageType {
  Info = 'Info',
  Message = 'Message',
}

export enum SenderMessageStatus {
  Unread = 'Unread',
  Read = 'Read',
}

@Scopes(() => ({
  forChatsList: {
    attributes: [
      'id',
      'number',
      'senderMemberId',
      'text',
      'type',
      'sender',
    ],
    include: [{
      model: ChatMember,//.scope('forChatsList'),
      as: 'sender',
    }],
  },
  forChat: {
    attributes: [
      'id',
      'senderMemberId',
      'text',
      'type',
      'sender',
    ],
    include: [{
      model: ChatMember,//.scope('forChat'),
      as: 'sender',
    }],
  },
  lastMessage: {
    attributes: [
      "id",
      "type",
      "text",
      "number",
      "chatId",
      "createdAt",
      "senderStatus",
    ]
  }
}))
@Table
export class Message extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true }) id: string;

  @Column({ type: DataType.INTEGER, allowNull: false }) number: number;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, allowNull: false}) senderMemberId: string;

  @Column({type: DataType.STRING, defaultValue: SenderMessageStatus.Unread}) senderStatus: SenderMessageStatus;
  @Column({type: DataType.STRING, allowNull: false}) type: MessageType;

  @Column(DataType.TEXT) text: string;

  @HasOne(() => InfoMessage) infoMessage: InfoMessage;
  @HasOne(() => StarredMessage) star: StarredMessage;

  @BelongsToMany(() => Media, () => MessageMedia) medias: Media[];
  @BelongsTo(() => ChatMember, 'senderMemberId') sender: ChatMember;
  @BelongsTo(() => Chat) chat: Chat;
}
