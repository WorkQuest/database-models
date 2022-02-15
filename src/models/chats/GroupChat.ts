import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey, HasOne,
  Model, Scopes,
  Table,
} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Chat} from "./Chat";
import {ChatMember} from "./ChatMember";

@Table
export class GroupChat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, allowNull: false}) ownerId: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @BelongsTo(() => Chat) chat: Chat;

  @BelongsTo(() => ChatMember, 'ownerId') owner: ChatMember;
}
