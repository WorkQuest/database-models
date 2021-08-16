import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../utils";
import { User } from "./User";

export interface UserPlace{
  country: string,
  city: string,
}

@Table
export class Session extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column(DataType.STRING) userId: string;

  @Column(DataType.JSONB) place: UserPlace;
  @Column(DataType.STRING) device: string;
  @Column(DataType.STRING) ipAddress: string;

  @Column({type: DataType.BOOLEAN, allowNull: true}) isActive: boolean;

  @Column({type: DataType.DATE, allowNull: true}) logoutAt: Date;
  @Column({type: DataType.DATE, allowNull: true}) lastActionTime: Date;

  @BelongsTo(() => User) user: User;
}
