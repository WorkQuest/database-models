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
import {User} from "../user/User";

export enum QuestChatStatuses {
  Open = 0,
  Close,
}

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
  }
}))
@Table
export class QuestChat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "Users", key: "id" }}) employerId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "Users", key: "id" }}) workerId: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "Quests", key: "id" }}) questId: string;

  @ForeignKey(() => QuestsResponse)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "QuestsResponses", key: "id" }}) responseId: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false, references: { model: "Chats", key: "id" }}) chatId: string;

  @Column({type: DataType.INTEGER, defaultValue: QuestChatStatuses.Open}) status: QuestChatStatuses;

  @BelongsTo(() => Chat) chat: Chat;
  @BelongsTo(() => Quest) quest: Quest;
  @BelongsTo(() => QuestsResponse) response: QuestsResponse;

  @BelongsTo(() => User, 'workerId') worker: User;
  @BelongsTo(() => User, 'employerId') employer: User;
}
