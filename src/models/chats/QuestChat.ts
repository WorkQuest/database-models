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

@Table
export class QuestChat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @ForeignKey(() => QuestsResponse)
  @Column({type: DataType.STRING, allowNull: false}) responseId: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @Column({type: DataType.BOOLEAN, defaultValue: false}) isActive: boolean; /**true - when response on quest chat should be create and be active*/

  @BelongsTo(() => Quest) quest: Quest;
  @BelongsTo(() => QuestsResponse) response: QuestsResponse;
  @BelongsTo(() => Chat) chat: Chat;
}
