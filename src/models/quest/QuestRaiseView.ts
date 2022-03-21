import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {Quest} from './Quest';
import {User} from "../user/User";

export enum QuestRaiseStatus {
  Paid,
  Closed,
}

export enum QuestRaiseDuration {
  OneDay = 1,
  FiveDays = 5,
  SevenDays = 7,
}

export enum QuestRaiseType {
  GoldPlus = 0,
  Gold,
  Silver ,
  Bronze ,
}

@Table
export class QuestRaiseView extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Quest) @Column({type: DataType.STRING, allowNull: false}) questId: string;

  @Column({type: DataType.INTEGER, defaultValue: QuestRaiseStatus.Closed}) status: QuestRaiseStatus;
  @Column({type: DataType.INTEGER, defaultValue: null}) duration: QuestRaiseDuration;
  @Column({type: DataType.INTEGER, defaultValue: null}) type: QuestRaiseType;

  @BelongsTo(() => Quest) quest: Quest;
}
