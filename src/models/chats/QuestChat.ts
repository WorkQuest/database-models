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
import { User } from "../user/User";
import { Admin } from "../admin/Admin";

export enum QuestChatStatus {
  Close = -1,
  Open = 0,
}

@Scopes(() => ({
  forChatsList: {
    attributes: {
      exclude: ['id', 'chatId', 'createdAt', 'updatedAt'],
    },
    include: [{
      model: Quest.unscoped(),
      as: 'quest',
      attributes: [
        'id',
        'title',
        'status',
      ],
    }, {
      model: QuestsResponse.unscoped(),
      as: "response",
      attributes: [
        "id",
        "workerId",
        "questId",
        "type",
        "status",
      ],
    }, {
      model: User.scope('short'),
      as: 'worker',
    }, {
      model: User.scope('short'),
      as: 'employer',
    }, {
      model: Admin.scope('short'),
      as: 'disputeAdmin',
    }],
  },
  forQuestChat: {
    attributes: {
      exclude: ['id', 'chatId', 'createdAt', 'updatedAt'],
    },
    include: [{
      model: Quest.unscoped(),
      as: 'quest',
      attributes: [
        'id',
        'userId',
        'assignedWorkerId',
        'nonce',
        'status',
      ],
    }, {
      model: QuestsResponse.unscoped(),
      as: "response",
      attributes: [
        "id",
        "workerId",
        "questId",
        "type",
        "status",
      ],
    }, {
      model: User.scope('short'),
      as: 'worker',
    }, {
      model: User.scope('short'),
      as: 'employer',
    }, {
      model: Admin.scope('short'),
      as: 'disputeAdmin',
    }],
  }
}))
@Table
export class QuestChat extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID(), unique: true}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) employerId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) workerId: string;

  @ForeignKey(() => Admin)
  @Column(DataType.STRING) disputeAdminId: string; /** if dispute */

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @ForeignKey(() => QuestsResponse)
  @Column({type: DataType.STRING, allowNull: false}) responseId: string;

  @ForeignKey(() => Chat)
  @Column({type: DataType.STRING, allowNull: false}) chatId: string;

  @Column({type: DataType.INTEGER, defaultValue: QuestChatStatus.Open}) status: QuestChatStatus;

  @BelongsTo(() => Chat) chat: Chat;
  @BelongsTo(() => Quest) quest: Quest;
  @BelongsTo(() => QuestsResponse) response: QuestsResponse;

  @BelongsTo(() => User, 'workerId') worker: User;
  @BelongsTo(() => User, 'employerId') employer: User;
  @BelongsTo(() => Admin, 'disputeAdminId') disputeAdmin: Admin;
}
