import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";
import { User } from "../user/User";
import { Chat } from "./Chat";
import { Message } from "./Message";
import { Admin } from "../admin/Admin";

export enum MemberRole {
  Admin= "admin",
  User = "user",
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
      model: Admin,
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
  }
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

  @Column({type: DataType.STRING, allowNull: false}) role: MemberRole;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, }) lastReadMessageId: string;

  /** Metadata */
  @Column({type: DataType.INTEGER, defaultValue: 0}) unreadCountMessages: number;
  @Column({type: DataType.INTEGER, }) lastReadMessageNumber: number;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Admin) admin: Admin;
}
