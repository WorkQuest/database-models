import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Scopes,
  Table,
} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Chat} from "./Chat";
import {ChatMember} from "./ChatMember";
import {Message} from "./Message";
import {QuestChat} from "./QuestChat";

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["updatedAt"]
    },
    include: [{
      model: ChatMember,
      as: 'owner'
    }]
  }
}))
@Table
export class GroupChat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @Column({type: DataType.STRING, defaultValue: null}) name: string; /** If group chat */

  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, allowNull: false}) ownerId: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @BelongsTo(() => Chat) chat: Chat;

  @BelongsTo(() => ChatMember, 'ownerId') owner: ChatMember;
}
