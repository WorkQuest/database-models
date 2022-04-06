import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {User} from "../user/User";

export enum UserRaiseStatus {
  Paid = 0,
  Closed = 1,
}

export enum UserRaiseDuration {
  OneDay = 1,
  SevenDays = 7,
  ThirtyOneDays = 31,
}

export enum UserRaiseType {
  GoldPlus = 0,
  Gold= 1,
  Silver = 2,
  Bronze = 3,
}

@Table
export class UserRaiseView extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({type: DataType.INTEGER, defaultValue: UserRaiseStatus.Closed}) status: UserRaiseStatus;
  @Column({type: DataType.INTEGER, defaultValue: null}) duration: UserRaiseDuration;
  @Column({type: DataType.INTEGER, defaultValue: null}) type: UserRaiseType;

  @BelongsTo(() => User) user: User;
}
