import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/User';
import { Quest } from './Quest';
import { getUUID } from '../../utils';

@Table
export class Review extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => Quest) @Column({type: DataType.STRING, allowNull: false, references: { model: "Quests", key: "id" }}) questId: string;
  @ForeignKey(() => User) @Column({type: DataType.STRING, allowNull: false, references: { model: "Users", key: "id" }}) fromUserId: string;
  @ForeignKey(() => User) @Column({type: DataType.STRING, allowNull: false, references: { model: "Users", key: "id" }}) toUserId: string;

  @Column({type: DataType.TEXT, defaultValue: null }) message: string;
  @Column({type: DataType.INTEGER, allowNull: false }) mark: number;

  @BelongsTo(() => User, 'fromUserId') fromUser: User;
  @BelongsTo(() => User, 'toUserId') toUser: User;
  @BelongsTo(() => Quest, 'questId') quest: Quest;

  avgMark: number; /** Used for calculations */
}
