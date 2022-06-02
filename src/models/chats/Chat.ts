import {ChatData} from "./ChatData";
import {GroupChat} from "./GroupChat";
import {QuestChat} from "./QuestChat";
import { getUUID } from "../../utils";
import { ChatMember } from "./ChatMember";
import {StarredChat} from "./StarredChat";
import {
  Model,
  Table,
  Column,
  Scopes,
  HasOne,
  HasMany,
  DataType,
} from "sequelize-typescript";

export enum ChatType {
  Private = 'Private',
  Group = 'Group',
  Quest = 'Quest'
}

@Scopes(() => ({
  chatsList: {
    attributes: {
      exclude: ["updatedAt"],
    },
    include: [{
      model: GroupChat,//.scope('forChatsList'),
      as: 'groupChat',
    }, {
      model: QuestChat,//.scope('forChatsList'),
      as: 'questChat',
    }, {
      model: ChatData,//.scope('forChatsList'),
      as: 'chatData',
    }],
  },
  groupChat: {
    attributes: {
      exclude: ["updatedAt"]
    },
    include: [{
      model: GroupChat,//.scope('forChat'),
      as: 'groupChat',
    }, {
      model: ChatData,//.scope('forChat'),
      as: 'chatData',
    }],
  },
  questChat: {
    attributes: {
      exclude: ["updatedAt"]
    },
    include: [{
      model: QuestChat,//.scope('forChat'),
      as: 'questChat',
    }, {
      model: ChatData,//.scope('forChat'),
      as: 'chatData',
    }],
  },
  privateChat: {
    attributes: {
      exclude: ["updatedAt"],
    },
    include: [{
      model: ChatData,//.scope('forChat'),
      as: 'chatData',
    }],
  },
  forGetChat: {
    include: [{
      model: QuestChat,
      as: 'questChat',
    }, {
      model: GroupChat,
      as: 'groupChat'
    }, {
      model: ChatData,
      as: 'chatData',
    }, {
      model: ChatMember,
      as: 'members',
    }]
  }
}))
@Table
export class Chat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;
  @Column({type: DataType.STRING, allowNull: false}) type: ChatType;

  @HasMany(() => ChatMember) members: ChatMember[];

  @HasOne(() => ChatMember) meMember: ChatMember;

  @HasOne(() => QuestChat) questChat: QuestChat;
  @HasOne(() => GroupChat) groupChat: GroupChat;
  @HasOne(() => ChatData) chatData: ChatData;

  /** Aliases for Queries */
  @HasOne(() => StarredChat) star: StarredChat;

  @HasOne(() => ChatMember) senderInPrivateChat: ChatMember;
  @HasOne(() => ChatMember) recipientInPrivateChat: ChatMember;

  @HasOne(() => ChatMember) firstMemberInPrivateChat: ChatMember; /** delete */
  @HasOne(() => ChatMember) secondMemberInPrivateChat: ChatMember; /** delete */
}
