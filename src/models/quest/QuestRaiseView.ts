import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {Quest} from './Quest';
import {User} from "../user/User";

export enum QuestRaiseStatus {
  Paid,
  Unpaid,
  Closed
}

export enum QuestRaiseDuration {
  OneDay = 1,
  FiveDays = 5,
  SevenDays = 7,
}

export enum QuestRaiseType {
  GoldPlus = 'goldPlusPackage',
  Gold = 'goldPackage',
  Silver = 'silverPackage',
  Bronze = 'bronzePackage'
}

@Table
export class QuestRaiseView extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => Quest) @Column({type: DataType.STRING, allowNull: false}) questId: string;
  @ForeignKey(() => User) @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({type: DataType.INTEGER, defaultValue: QuestRaiseStatus.Unpaid}) status: QuestRaiseStatus;
  @Column({type: DataType.INTEGER, allowNull: false}) duration: QuestRaiseDuration;
  @Column({type: DataType.STRING, allowNull: false}) type: QuestRaiseType;

  @BelongsTo(() => Quest) quest: Quest;
  @BelongsTo(() => User) user: User;
}
