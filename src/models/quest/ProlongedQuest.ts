import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { getUUID } from '../../utils';
import {Quest} from "./Quest";

@Table
export class ProlongedQuest extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @Column({type: DataType.DATE, allowNull: false}) prolongedTill: Date;

  @BelongsTo(() => Quest, 'questId') quest: Quest;
}
