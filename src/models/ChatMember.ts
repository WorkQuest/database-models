import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from "sequelize-typescript";
import { getUUID } from "../utils";
import { User } from "./User";
import { Chat } from "./Chat";

@Scopes(() => ({
  defaultScope: {
    include: [{
      model: User,
      as: 'user'
    }]
  }
}))
@Table
export class ChatMember extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Chat) chat: Chat;
}
