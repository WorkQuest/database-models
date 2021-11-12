import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../../utils";
import {Quest, QuestStatus} from "./Quest";

@Table
export class QuestBlockReason extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => Quest) @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @Column({type: DataType.TEXT, allowNull: false}) blockReason: string;
  @Column({type: DataType.INTEGER, allowNull: false}) previousStatus: QuestStatus;

  @BelongsTo(() => Quest) quest: Quest;
}
