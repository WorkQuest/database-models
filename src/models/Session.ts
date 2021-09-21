import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../utils";
import { User } from "./User";

export interface UserLoginPlace {
  country: string | null;
  city: string | null;
}

const defaultUserLoginPlace: UserLoginPlace = {
  country: null,
  city: null,
}

@Table
export class Session extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column(DataType.STRING) userId: string;

  @Column({type: DataType.BOOLEAN, defaultValue: true}) invalidating: boolean;

  @Column({type: DataType.JSONB, defaultValue: defaultUserLoginPlace}) place: UserLoginPlace;
  @Column({type: DataType.STRING, defaultValue: null}) ip: string;
  @Column({type: DataType.STRING, defaultValue: null}) device: string;

  @Column(DataType.DATE) logoutAt: Date;

  @BelongsTo(() => User) user: User;
}
