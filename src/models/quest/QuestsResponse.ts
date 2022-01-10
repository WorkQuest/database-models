import {User} from '../user/User';
import {Quest} from './Quest';
import {QuestChat} from "../chats/QuestChat";
import {getUUID} from '../../utils';
import {Media} from "../Media";
import {QuestResponseMedia} from "./QuestResponseMedia";
import {QuestsResponseStatus, QuestsResponseType} from "./types";
import {
  Model,
  Table,
  Column,
  HasOne,
  Scopes,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from 'sequelize-typescript';

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ['updatedAt']
    },
    include: [{
      model: User.scope('short'),
      as: 'worker'
    }, {
      model: Media.scope('urlOnly'),
      as: 'medias',
      through: { attributes: [] }
    }]
  }
}))
@Table
export class QuestsResponse extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User) @Column(DataType.STRING) workerId: string;
  @ForeignKey(() => Quest) @Column(DataType.STRING) questId: string;

  @Column({type: DataType.INTEGER, defaultValue: QuestsResponseStatus.Open }) status: QuestsResponseStatus;
  @Column({type: DataType.INTEGER, defaultValue: QuestsResponseType.Response }) type: QuestsResponseType;

  @Column({type: DataType.TEXT }) message: string;

  @BelongsTo(() => User) worker: User;
  @BelongsTo(() => Quest) quest: Quest;
  @BelongsToMany(() => Media, () => QuestResponseMedia) medias: Media[];

  @HasOne(() => QuestChat) questChat: QuestChat;
}
