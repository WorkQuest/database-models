import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { getUUID } from '../../utils';
import { User } from '../user/User';
import {Discussion} from "./Discussion";

@Table
export class StarredDiscussion extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @ForeignKey(() => Discussion)
  @Column({type: DataType.STRING, allowNull: false}) discussionId: string;

  @BelongsTo(() => User, { constraints: false }) user: User;
  @BelongsTo(() => Discussion, { constraints: false }) discussion: Discussion;
}

