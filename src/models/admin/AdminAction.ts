import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../../utils";
import { Admin } from "./Admin";

@Table
export class AdminAction extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Admin)
  @Column({type: DataType.STRING, allowNull: false}) adminId: string;

  @Column({type: DataType.JSONB, allowNull: false}) action: string;

  @BelongsTo(() => Admin) admin: Admin;
}
