import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from 'sequelize-typescript';
import {getUUID} from '../utils';
import {Quest} from './Quest';
import {User} from "./User";

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["updatedAt"],
    }
  }
}))
@Table
export class SkillFilter extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, defaultValue: null}) userId: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, defaultValue: null}) questId: string;

  @Column({type: DataType.STRING, allowNull: false}) category: string;
  @Column({type: DataType.STRING, allowNull: false}) skill: string;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Quest) quest: Quest;
}
