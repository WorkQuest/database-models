import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
  HasMany,
  Scopes, HasOne,
} from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import {StarredChat} from "./StarredChat";
import { getUUID } from "../../utils";
import {QuestChat} from "./QuestChat";
import {GroupChat} from "./GroupChat";

export enum ChatType {
  private = 'private',
  group = 'group',
  quest = 'quest'
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["messages", "updatedAt"]
    },
    include: [{
      model: Message,
      as: 'lastMessage'
    }, {
      model: QuestChat,
      as: 'questChat',
    }, {
      model: GroupChat,
      as: 'groupChat'
    }]
  }
}))
@Table
export class Chat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  // @ForeignKey(() => User) /** If group chat */
  // @Column({type: DataType.STRING, defaultValue: null}) ownerUserId: string; //TODO/////////////////

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, defaultValue: null}) lastMessageId: string;

  @Column({type: DataType.STRING, allowNull: false}) type: ChatType;
  @Column({type: DataType.DATE, defaultValue: null}) lastMessageDate: Date;

  @BelongsTo(() => Message, { foreignKey: 'lastMessageId', constraints: false }) lastMessage: Message;

  @HasMany(() => Message) messages: Message[];
  @HasMany(() => ChatMember) members: ChatMember[];
  @HasOne(() => ChatMember) meMember: ChatMember;
  @HasOne(() => QuestChat) questChat: QuestChat;
  @HasOne(() => GroupChat) groupChat: GroupChat;

  /** Aliases for Queries */
  @HasOne(() => StarredChat) star: StarredChat;
  @HasOne(() => ChatMember) firstMemberInPrivateChat: ChatMember;
  @HasOne(() => ChatMember) secondMemberInPrivateChat: ChatMember;
}
