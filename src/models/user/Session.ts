import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./User";
import { getUUID } from "../../utils";
import {UserLoginPlace} from "./types";

const defaultUserLoginPlace: UserLoginPlace = {
  country: null,
  city: null,
}

@Table
export class Session extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column(DataType.STRING) userId: string;

  @Column({type: DataType.BOOLEAN, defaultValue: true}) invalidating: boolean;

  /** Metadata */
  @Column(DataType.STRING) ip: string;
  @Column(DataType.STRING) device: string;
  @Column(DataType.DATE) logoutAt: Date;

  @Column({type: DataType.JSONB, defaultValue: defaultUserLoginPlace}) place: UserLoginPlace;

  @BelongsTo(() => User) user: User;
}
