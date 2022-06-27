import { HTTPVerb } from "../types";
import { getUUID } from "../../utils";
import { Admin } from "./Admin";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

@Table
export class AdminActionMetadata extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Admin)
  @Column({type: DataType.STRING, allowNull: false}) adminId: string;

  @Column({type: DataType.STRING, allowNull: false}) path: string;
  @Column({type: DataType.STRING, allowNull: false}) HTTPVerb: HTTPVerb;

  @BelongsTo(() => Admin) admin: Admin;
}
