import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey, HasOne,
  Model, Scopes,
  Table,
} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Quest} from "../quest/Quest";
import {QuestsResponse} from "../quest/QuestsResponse";
import {Chat} from "./Chat";
import {ChatMember} from "./ChatMember";

export enum QuestChatStatuses {
  Open = 0,
  Close,
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    },
    include: [{
      model: Quest,
      as: 'quest',
      attributes: ["title"] // TODO Add Quest short
    }]
  },
  idsOnly: {
    attributes: ['employerMemberId', 'workerMemberId', 'questId', 'responseId', 'chatId']
  }
}))
@Table
export class QuestChat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, allowNull: false}) employerMemberId: string;

  @ForeignKey(() => ChatMember)
  @Column({type: DataType.STRING, allowNull: false}) workerMemberId: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @ForeignKey(() => QuestsResponse)
  @Column({type: DataType.STRING, allowNull: false}) responseId: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @Column({type: DataType.INTEGER, defaultValue: QuestChatStatuses.Open}) status: QuestChatStatuses;

  @BelongsTo(() => Chat) chat: Chat;
  @BelongsTo(() => Quest) quest: Quest;
  @BelongsTo(() => QuestsResponse) response: QuestsResponse;

  @BelongsTo(() => ChatMember, 'workerMemberId') worker: ChatMember;
  @BelongsTo(() => ChatMember, 'employerMemberId') employer: ChatMember;
}
