import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../utils";
import { Admin } from "./Admin";

export interface AdminPlace{
  country: string,
  city: string,
}

@Table
export class AdminSession extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => Admin) @Column(DataType.STRING) adminId: string;

  @Column(DataType.JSONB) place: AdminPlace;
  @Column(DataType.STRING) device: string;

  @BelongsTo(() => Admin) admin: Admin;
}
