import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Message} from "./Message";
import {User} from "../User";

export enum MessageAction {
  groupChatCreate = 'groupChatCreate',
  groupChatAddUser = 'groupChatAddUser',
  groupChatDeleteUser = 'groupChatDeleteUser',
  groupChatLeaveUser = 'groupChatLeaveUser',
}

@Table
export class InfoMessage extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true }) id: string;

  @ForeignKey(() => Message)
  @Column(DataType.STRING) messageId: string;

  /** Common relations user table: who was removed and etc */
  @ForeignKey(() => User)
  @Column(DataType.STRING) userId: string;

  @Column({type: DataType.STRING, allowNull: false}) messageAction: MessageAction;

  @BelongsTo(() => Message) message: Message;
}
