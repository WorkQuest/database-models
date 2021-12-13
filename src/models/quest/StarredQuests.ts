import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {User} from '../user/User';
import {Quest} from './Quest';

@Table
export class StarredQuests extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;
  @ForeignKey(() => User) @Column({type: DataType.STRING, allowNull: false, references: { model: "Users", key: "id" }}) userId: string;
  @ForeignKey(() => Quest) @Column({type: DataType.STRING, allowNull: false, references: { model: "Quests", key: "id" }}) questId: string;

  @BelongsTo(() => User, { constraints: false }) user: User;
  @BelongsTo(() => Quest, { constraints: false }) quest: Quest;
}

