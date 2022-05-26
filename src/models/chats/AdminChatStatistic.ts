import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";
import {Admin} from "../admin/Admin";
import {MemberType} from "../types";


@Table
export class AdminChatStatistic extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Admin)
  @Column(DataType.STRING) adminId: string;

  @Column({type: DataType.INTEGER, defaultValue: 0}) unreadCountChats: number;

  @BelongsTo(() => Admin) admin: Admin;
}
