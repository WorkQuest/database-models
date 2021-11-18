import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Message} from "./Message";
import {User} from "../user/User";

export enum MessageAction {
  groupChatCreate = 'groupChatCreate',
  groupChatAddUser = 'groupChatAddUser',
  groupChatDeleteUser = 'groupChatDeleteUser',
  groupChatLeaveUser = 'groupChatLeaveUser',
  /** Quest flow */
  workerResponseOnQuest = 'workerResponseOnQuest',
  employerRejectResponseOnQuest = 'employerRejectResponseOnQuest',

  employerInviteOnQuest = 'employerInviteOnQuest',
  workerRejectInviteOnQuest = 'workerRejectInviteOnQuest',
  workerAcceptInviteOnQuest = 'workerAcceptInviteOnQuest',
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    },
    include: [{
      model: User.scope('shortWithAdditionalInfo'),
      as: 'user',
    }],
  }
}))
@Table
export class InfoMessage extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true }) id: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, allowNull: false}) messageId: string;

  /** Common relations user table: who was removed and etc */
  @ForeignKey(() => User)
  @Column({type: DataType.STRING, defaultValue: null}) userId: string;

  @Column({type: DataType.STRING, allowNull: false}) messageAction: MessageAction;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Message) message: Message;
}
