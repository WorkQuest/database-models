import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";
import { Admin } from "../Admin";
import { Chat } from "./Chat";
import {AdminChat} from "./AdminChat";

@Scopes(() => ({
  adminOnly: {
    attributes: {
      exclude: ['id', 'chatId', 'createdAt', 'updatedAt']
    },
    include: [{
      model: Admin,
      as: 'admin'
    }]
  }
}))
@Table
export class AdminChatMember extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => AdminChat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @ForeignKey(() => Admin)
  @Column({type: DataType.STRING, allowNull: false}) adminId: string;

  @BelongsTo(() => Admin) admin: Admin;
  @BelongsTo(() => AdminChat) chat: AdminChat;
}
