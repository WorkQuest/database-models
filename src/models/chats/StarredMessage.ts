import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { getUUID } from '../../utils';
import {Message} from "./Message";
import {ChatMember} from "./ChatMember";

@Table
export class StarredMessage extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, allowNull: false}) memberId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, allowNull: false}) messageId: string;

  @BelongsTo(() => ChatMember, { constraints: false }) member: ChatMember;
  @BelongsTo(() => Message, { constraints: false }) message: Message;
}

