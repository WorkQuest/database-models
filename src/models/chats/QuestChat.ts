import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { getUUID } from "../../utils";
import {Quest} from "../quest/Quest";
import {QuestsResponse} from "../quest/QuestsResponse";
import {Chat} from "./Chat";
import {User} from "../user/User";

export enum QuestChatStatuses {
  Open,
  Close
}

@Table
export class QuestChat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) employerId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) workerId: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @ForeignKey(() => QuestsResponse)
  @Column({type: DataType.STRING, allowNull: false}) responseId: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @Column({type: DataType.INTEGER, defaultValue: QuestChatStatuses.Open}) status: QuestChatStatuses; /**true - when response on quest chat should be create and be active*/

  @BelongsTo(() => User, 'employerId') employer: User;
  @BelongsTo(() => User, 'workerId') worker: User;
  @BelongsTo(() => Quest) quest: Quest;
  @BelongsTo(() => QuestsResponse) response: QuestsResponse;
  @BelongsTo(() => Chat) chat: Chat;
}
