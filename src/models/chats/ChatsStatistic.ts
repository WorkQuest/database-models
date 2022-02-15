import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { getUUID } from "../../utils";
import {ChatMember} from "./ChatMember";

@Table
export class ChatsStatistic extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, allowNull: false}) memberId: string;

  @Column({type: DataType.INTEGER, defaultValue: 0}) unreadCountChats: number;

  @BelongsTo(() => ChatMember) member: ChatMember;
}
