import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../../utils";
import { User } from "./User";
import {Place} from "../types";
import { LoginApp } from "./types";

const defaultUserLoginPlace: Place = {
  country: null,
  city: null,
}

@Table
export class Session extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column(DataType.STRING) userId: string;

  @Column({type: DataType.JSONB, defaultValue: defaultUserLoginPlace}) place: Place;

  @Column({type: DataType.STRING, defaultValue: LoginApp.App}) app: LoginApp;

  @Column({type: DataType.BOOLEAN, defaultValue: true}) invalidating: boolean;
  @Column({type: DataType.BOOLEAN, allowNull: false}) isTotpPassed: boolean;

  @Column(DataType.STRING) ip: string;

  @Column(DataType.STRING) device: string;


  @Column(DataType.DATE) logoutAt: Date;

  @BelongsTo(() => User) user: User;
}
