import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";
import {User} from "../user/User";

@Table
export class QuestsStatistic extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column({type: DataType.STRING, references: { model: "Users", key: "id" }}) userId: string;

  @Column({type: DataType.INTEGER, defaultValue: 0}) completed: number;
  @Column({type: DataType.INTEGER, defaultValue: 0}) opened: number;

  @BelongsTo(() => User) user: User;
}
