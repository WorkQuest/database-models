import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../utils";
import { Admin } from "./Admin";

export interface AdminLoginPlace {
  country: string | null;
  city: string | null;
}

const defaultAdminLoginPlace: AdminLoginPlace = {
  country: null,
  city: null,
}

@Table
export class AdminSession extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;
  @ForeignKey(() => Admin) @Column(DataType.STRING) adminId: string;

  @Column({type: DataType.JSONB, defaultValue: defaultAdminLoginPlace}) place: AdminLoginPlace;
  @Column({type: DataType.STRING, defaultValue: null}) device: string;
  @Column({type: DataType.BOOLEAN, defaultValue: true}) isActive: boolean;

  @Column(DataType.DATE) logoutAt: Date;
  @Column(DataType.DATE) lastActionTime: Date;

  @BelongsTo(() => Admin) admin: Admin;
}
