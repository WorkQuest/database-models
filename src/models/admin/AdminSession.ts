import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../../utils";
import { Admin } from "./Admin";

@Table
export class AdminSession extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => Admin) @Column({type: DataType.STRING, references: { model: "Admins", key: "id" }}) adminId: string;

  @BelongsTo(() => Admin) admin: Admin;
}
