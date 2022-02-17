import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../../utils";
import { Admin } from "./Admin";

export enum AdminActionMethod {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Delete = 'delete',
}

@Table
export class AdminAction extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Admin)
  @Column({type: DataType.STRING, allowNull: false}) adminId: string;

  @Column({type: DataType.JSONB, allowNull: false}) method: string;
  @Column({type: DataType.JSONB, allowNull: false}) path: AdminActionMethod;

  @BelongsTo(() => Admin) admin: Admin;
}
