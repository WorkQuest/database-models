import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";
import {User} from "../user/User";

@Table
export class ChatsStatistic extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) memberId: string;

  @Column({type: DataType.INTEGER, defaultValue: 0}) unreadCountChats: number;

  @BelongsTo(() => User) member: User;
}
