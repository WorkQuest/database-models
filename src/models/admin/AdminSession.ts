import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../../utils";
import { Admin } from "./Admin";
import {Place} from "../types";

const defaultAdminLoginPlace: Place = {
  country: null,
  city: null,
}

@Table
export class AdminSession extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Admin)
  @Column({type: DataType.STRING, allowNull: false}) adminId: string;

  @Column({type: DataType.JSONB, defaultValue: defaultAdminLoginPlace}) place: Place;

  @Column({type: DataType.BOOLEAN, defaultValue: true}) invalidating: boolean;

  @Column(DataType.STRING) ip: string;

  @Column(DataType.STRING) device: string;

  @Column(DataType.DATE) logoutAt: Date;

  @BelongsTo(() => Admin) admin: Admin;
}
