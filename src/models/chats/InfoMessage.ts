import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Message} from "./Message";
import {ChatMember} from "./ChatMember";

export enum MessageAction {
  GroupChatCreate = 'GroupChatCreate',
  GroupChatAddMember = 'GroupChatAddMember',
  GroupChatMemberRestored = 'GroupChatMemberRestored',
  GroupChatDeleteMember = 'GroupChatDeleteMember',
  GroupChatLeaveMember = 'GroupChatLeaveMember',
  /** Quest flow */
  WorkerResponseOnQuest = 'WorkerResponseOnQuest',
  EmployerRejectResponseOnQuest = 'EmployerRejectResponseOnQuest',

  EmployerInviteOnQuest = 'EmployerInviteOnQuest',
  WorkerRejectInviteOnQuest = 'WorkerRejectInviteOnQuest',
  WorkerAcceptInviteOnQuest = 'WorkerAcceptInviteOnQuest',
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    },
    include: [{
      model: ChatMember.scope('memberOnly'),
      as: 'member',
    }],
  }
}))
@Table
export class InfoMessage extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true }) id: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, allowNull: false}) messageId: string;

  /** Common relations user table: who was removed and etc */
  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, defaultValue: null}) memberId: string;

  @Column({type: DataType.STRING, allowNull: false}) messageAction: MessageAction;

  @BelongsTo(() => ChatMember) member: ChatMember;
  @BelongsTo(() => Message) message: Message;
}
