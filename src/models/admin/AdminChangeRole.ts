import {BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {User, UserRole} from "../user/User";
import {Priority, WorkPlace} from "../types";


@Table
export class AdminChangeRole extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @Column({type: DataType.STRING, defaultValue: null}) adminId: string;                                           /** Fill if admin change user role */

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;
  @Column({type: DataType.STRING, allowNull: false}) role: UserRole;
  @Column({type: DataType.JSONB, defaultValue: {}}) additionalInfo: object;

  /** UserRole.Worker */
  @Column({type: DataType.DECIMAL, defaultValue: null}) wagePerHour: string;
  @Column({type: DataType.STRING, defaultValue: null}) workplace: WorkPlace;
  @Column({type: DataType.INTEGER, defaultValue: Priority.AllPriority}) priority: Priority;

  @BelongsTo(() => User) userChangeRole: User;
}
