import {ChatData} from "./ChatData";
import {GroupChat} from "./GroupChat";
import {QuestChat} from "./QuestChat";
import { getUUID } from "../../utils";
import { ChatMember, MemberStatus } from "./ChatMember";
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
import { Message } from "./Message";
import { User } from "../user/User";
import { Media } from "../Media";
import { Quest } from "../quest/Quest";
import { ChatMemberData } from "./ChatMemberData";
import { QuestDispute } from "../quest/QuestDispute";
import { Admin } from "../admin/Admin";

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
      model: GroupChat,
      as: 'groupChat',
    }, {
      model: QuestChat,
      as: 'questChat',
    }, {
      model: ChatData,
      as: 'chatData',
    }],
  },
  groupChat: {
    attributes: {
      exclude: ["updatedAt"]
    },
    include: [{
      model: GroupChat,
      as: 'groupChat',
    }, {
      model: ChatData,
      as: 'chatData',
    }],
  },
  questChat: {
    attributes: {
      exclude: ["updatedAt"]
    },
    include: [{
      model: QuestChat,
      as: 'questChat',
    }, {
      model: ChatData,
      as: 'chatData',
    }],
  },
  privateChat: {
    attributes: {
      exclude: ["updatedAt"],
    },
    include: [{
      model: ChatData,
      as: 'chatData',
    }],
  },
  forGetChat: {
    include: [{
      model: QuestChat,
      as: 'questChat',
      include: [{
        model: Quest.unscoped(),
        include: [{
          model: QuestDispute.unscoped(),
          as: 'openDispute',
          required: false,
          attributes: [
            'id',
            'status',
          ],
        }],
        as: 'quest',
        attributes: ["id", "title"]
      }],
    }, {
      model: GroupChat,
      as: 'groupChat',
    }, {
      model: ChatData,
      as: 'chatData',
    }, {
      model: ChatMember,
      as: 'members',
      where: {
        status:  MemberStatus.Active
      },
      include: [{
        model: User.unscoped(),
        as: 'user',
        attributes: ["firstName", "lastName", "avatarId", "role"],
        include: [{
          model: Media,
          as: 'avatar',
        }],
      }, {
        model: ChatMemberData,
        attributes: ['unreadCountMessages'],
        as: 'chatMemberData',
      }, {
        model: Admin.unscoped(),
        as: 'admin',
        attributes: ["id", "firstName", "lastName"],
      }]
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
