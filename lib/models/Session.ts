import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../utils";
import { User } from "./User";
import { Admin } from "./Admin";

@Table
export class Session extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column(DataType.STRING) userId: string;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Admin) admin: Admin;
}
