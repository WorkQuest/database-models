import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../utils";
import {User, UserStatus} from "./User";

@Table
export class QuestsStatistic extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column(DataType.STRING) userId: string;

  @Column(DataType.INTEGER) completed: number;
  @Column(DataType.INTEGER) opened: number;

  @BelongsTo(() => User) user: User;
}
