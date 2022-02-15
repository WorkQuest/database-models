import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey, HasOne,
  Model, Scopes,
  Table,
} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Quest} from "../quest/Quest";
import {QuestsResponse} from "../quest/QuestsResponse";
import {Chat} from "./Chat";
import {ChatMember} from "./ChatMember";

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    },
    include: [{
      model: Quest,
      as: 'quest',
      attributes: ["title"] // TODO Add Quest short
    }]
  },
  idsOnly: {
    attributes: ['employerId', 'workerId', 'questId', 'responseId', 'chatId']
  }
}))
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
