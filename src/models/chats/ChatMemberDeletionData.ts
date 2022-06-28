import { Message } from "./Message";
import { getUUID } from "../../utils";
import { ChatMember } from "./ChatMember";
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey, Scopes,
} from "sequelize-typescript";
import { Media } from "../Media";
import { RatingStatistic } from "../user/RatingStatistic";
import { UserRaiseView } from "../raise-view/UserRaiseView";
import { UserSpecializationFilter } from "../user/UserSpecializationFilter";
import { QuestsStatistic } from "../quest/QuestsStatistic";

export enum ReasonForRemovingFromChat {
  Left = 'Left',
  Removed = 'Removed',
  ResolvedDispute = 'ResolvedDispute',
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: []
    },
    include: [{
      model: Message,
      as: 'beforeDeletionMessage'
    }]
  },
}))
@Table
export class ChatMemberDeletionData extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, allowNull: false}) chatMemberId: string;

  @ForeignKey(() => Message)
  @Column({type: DataType.STRING, allowNull: false}) beforeDeletionMessageId: string;

  @Column({type: DataType.STRING, allowNull: false}) reason: ReasonForRemovingFromChat;

  @Column({type: DataType.INTEGER, allowNull: false}) beforeDeletionMessageNumber: string;

  @BelongsTo(() => ChatMember) chatMember: ChatMember;
  @BelongsTo(() => Message) message: Message;
}
