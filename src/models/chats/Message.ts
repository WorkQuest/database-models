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
  info = 'info',
  message = 'message',
}

export enum SenderMessageStatus {
  unread = 'unread',
  read = 'read',
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["updatedAt"]
    },
    include: [{
      model: Media,
      as: 'medias',
      through: { attributes: [] }
    }, {
      model: ChatMember,
      as: 'sender'
    }, {
      model: InfoMessage,
      as: 'infoMessage'
    }]
  },
  forChatData: {
    attributes: [
      'id',
      'senderMemberId',
      'text',
      'type',
      'sender',
    ],
    include: [{
      model: ChatMember.scope('forChatData'),
      as: 'sender',
    }],
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

  @Column({type: DataType.STRING, defaultValue: SenderMessageStatus.unread}) senderStatus: SenderMessageStatus;
  @Column({type: DataType.STRING, allowNull: false}) type: MessageType;

  @Column(DataType.TEXT) text: string;

  @HasOne(() => InfoMessage) infoMessage: InfoMessage;
  @HasOne(() => StarredMessage) star: StarredMessage;

  @BelongsToMany(() => Media, () => MessageMedia) medias: Media[];
  @BelongsTo(() => ChatMember, 'senderMemberId') sender: ChatMember;
  @BelongsTo(() => Chat) chat: Chat;
}
