import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {User} from "../user/User";
import { UserRaiseDuration, UserRaiseStatus, UserRaiseType } from "./types";

@Scopes(() => ({
  forUserMe: {
    attributes: {
      exclude: ["id", "userId", "createdAt", "updatedAt"]
    }
  }
}))
@Table
export class UserRaiseView extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  @Column({type: DataType.INTEGER, defaultValue: UserRaiseStatus.Closed}) status: UserRaiseStatus;
  @Column({type: DataType.INTEGER, defaultValue: null}) duration: UserRaiseDuration;
  @Column({type: DataType.INTEGER, defaultValue: null}) type: UserRaiseType;
  @Column({type: DataType.DATE, defaultValue: null}) endedAt: Date;

  @BelongsTo(() => User) user: User;
}
