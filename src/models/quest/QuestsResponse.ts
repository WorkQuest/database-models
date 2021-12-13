import {BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Scopes, Table} from 'sequelize-typescript';
import {User} from '../user/User';
import {Quest} from './Quest';
import {QuestChat} from "../chats/QuestChat";
import {getUUID} from '../../utils';

export enum QuestsResponseStatus {
  Rejected = -1,
  Open = 0,
  Accepted,
  Closed,
}

export enum QuestsResponseType {
  Response = 0,
  Invite,
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ['updatedAt']
    },
    include: [{
      model: User.scope('short'),
      as: 'worker'
    }]
  }
}))
@Table
export class QuestsResponse extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User) @Column({type: DataType.STRING, references: { model: "Users", key: "id" }}) workerId: string;
  @ForeignKey(() => Quest) @Column({type: DataType.STRING, references: { model: "Quests", key: "id" }}) questId: string;

  @Column({type: DataType.INTEGER, defaultValue: QuestsResponseStatus.Open }) status: QuestsResponseStatus;
  @Column({type: DataType.INTEGER, defaultValue: QuestsResponseType.Response }) type: QuestsResponseType;

  @Column({type: DataType.TEXT }) message: string;

  @BelongsTo(() => User) worker: User;
  @BelongsTo(() => Quest) quest: Quest;

  @HasOne(() => QuestChat) questChat: QuestChat;
}
