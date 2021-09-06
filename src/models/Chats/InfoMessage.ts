import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Message} from "./Message";
import {User} from "../User";

export enum MessageAction {
  messageActionGroupChatCreate = 'messageActionGroupChatCreate',
  messageActionGroupChatAddUser = 'messageActionGroupChatAddUser',
  messageActionGroupChatDeleteUser = 'messageActionGroupChatDeleteUser',
  messageActionGroupChatLeaveUser = 'messageActionGroupChatLeaveUser',
}

@Table
export class InfoMessage extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true }) id: string;

  @ForeignKey(() => User)
  @Column(DataType.STRING) userId: string;

  @Column({type: DataType.STRING, allowNull: false}) messageAction: MessageAction;

  @BelongsTo(() => Message) message: Message;
}
