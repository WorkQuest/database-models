import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {User} from "./User";
import {UserRaiseType} from "./types";

export enum UserRaiseStatus {
  Paid,
  Unpaid,
  Closed,
}

export enum UserRaiseDuration {
  OneDay = 1,
  SevenDays = 7,
  ThirtyOneDays = 31,
}

@Table
export class UserRaiseView extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User) @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({type: DataType.INTEGER, defaultValue: UserRaiseStatus.Unpaid}) status: UserRaiseStatus;
  @Column({type: DataType.INTEGER, defaultValue: null}) duration: UserRaiseDuration;
  @Column({type: DataType.INTEGER, defaultValue: null}) type: UserRaiseType;

  @BelongsTo(() => User) user: User;
}
