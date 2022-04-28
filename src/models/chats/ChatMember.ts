import {BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Scopes, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";
import { User } from "../user/User";
import { Chat } from "./Chat";
import { Admin } from "../admin/Admin";
import {ChatMemberDeletionData} from "./ChatMemberDeletionData";
import {ChatMemberData} from "./ChatMemberData";
import {MemberType} from "../types";


export enum MemberStatus {
  Active= "active",
  Deleted = "deleted",
}

@Scopes(() => ({
  memberOnly: {
    attributes: {
      exclude: ['id', 'chatId','createdAt', 'updatedAt']
    },
    include: [{
      model: User.scope('shortWithAdditionalInfo'),
      as: 'user'
    }, {
      model: Admin.scope(''),
      as: 'admin',
    }],
  },
  forChatData: {
    attributes: [
      'id',
      'userId',
      'adminId',
      'type',
      'status',
      'user',
      'admin',
    ],
    include: [{
      model: User.scope('shortWithAdditionalInfo'),
      as: 'user',
    }, {
      model: Admin.scope('short'),
      as: 'admin',
    }],
  },
  forGroupChat: {
    attributes: [
      'id',
      'userId',
      'adminId',
      'type',
      'status',
      'user',
      'admin',
    ],
    include: [{
      model: User.scope('short'),
      as: 'user',
    }, {
      model: Admin.scope('short'),
      as: 'admin',
    }],
  },
  userIdsOnly: {
    attributes: {
      exclude: [
        'id',
        'chatId',
        'createdAt',
        'updatedAt',
        'unreadCountMessages',
      ]
    },
  },
}))
@Table
export class ChatMember extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @ForeignKey(() => User)
  @Column(DataType.STRING) userId: string;

  @ForeignKey(() => Admin)
  @Column(DataType.STRING) adminId: string;

  @Column({type: DataType.STRING, allowNull: false}) type: MemberType;
  @Column({type: DataType.STRING, defaultValue: MemberStatus.Active}) status: MemberStatus;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Admin) admin: Admin;
  @BelongsTo(() => Chat) chat: Chat;

  @HasOne(() => ChatMemberData) chatMemberData: ChatMemberData;
  @HasOne(() => ChatMemberDeletionData) chatMemberDeletionData: ChatMemberDeletionData;
}
