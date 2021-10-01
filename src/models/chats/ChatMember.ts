import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";
import { User } from "../user/User";
import { Chat } from "./Chat";

@Scopes(() => ({
  userOnly: {
    attributes: {
      exclude: ['id', 'chatId','createdAt', 'updatedAt']
    },
    include: [{
      model: User.scope('short'),
      as: 'user'
    }]
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
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  /** Metadata */
  @Column({type: DataType.INTEGER.UNSIGNED, defaultValue: 0}) unreadCountMessages: number;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Chat) chat: Chat;
}
