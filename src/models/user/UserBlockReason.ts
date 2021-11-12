import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { getUUID } from "../../utils";
import {User, UserStatus} from "./User";

@Table
export class UserBlockReason extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column(DataType.STRING) userId: string;

  @Column({type: DataType.TEXT, allowNull: false}) blockReason: string;
  @Column({type: DataType.INTEGER, allowNull: false}) previousStatus: UserStatus;

  @BelongsTo(() => User) user: User;
}
