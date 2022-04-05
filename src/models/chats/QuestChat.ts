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
import {User} from "../user/User";
import { QuestDispute } from "../quest/QuestDispute";

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
    attributes: ['employerId', 'workerId', 'questId', 'responseId', 'chatId', 'disputeId']
  }
}))
@Table
export class QuestChat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) employerId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) workerId: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @ForeignKey(() => QuestsResponse)
  @Column({type: DataType.STRING, allowNull: false}) responseId: string;

  @ForeignKey(() => QuestDispute)
  @Column(DataType.STRING) disputeId: string; /** When dispute */

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @Column({type: DataType.INTEGER, defaultValue: QuestChatStatuses.Open}) status: QuestChatStatuses;

  @BelongsTo(() => Chat) chat: Chat;
  @BelongsTo(() => Quest) quest: Quest;
  @BelongsTo(() => QuestDispute) dispute: QuestDispute;
  @BelongsTo(() => QuestsResponse) response: QuestsResponse;

  @BelongsTo(() => User, 'workerId') worker: User;
  @BelongsTo(() => User, 'employerId') employer: User;
}
