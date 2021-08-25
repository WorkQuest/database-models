import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../utils";
import {User, UserStatus} from "./User";

@Table
export class UserQuestsInfo extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column(DataType.STRING) userId: string;

  @Column(DataType.INTEGER) completedQuests: number;
  @Column(DataType.INTEGER) openedQuests: number;

  @BelongsTo(() => User) user: User;
}
