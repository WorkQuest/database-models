import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";
import {User} from "../user/User";
import {MemberType} from "../types";


@Table
export class UserChatsStatistic extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column(DataType.STRING) userId: string;

  @Column({type: DataType.STRING, allowNull: false}) type: MemberType;

  @Column({type: DataType.INTEGER, defaultValue: 0}) unreadCountChats: number;

  @BelongsTo(() => User) user: User;
}
