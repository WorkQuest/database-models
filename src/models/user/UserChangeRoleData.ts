import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {User, UserRole} from "./User";
import {Priority, WorkPlace} from "../types";
import {Admin} from "../admin/Admin";

@Table
export class UserChangeRoleData extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => Admin)
  @Column(DataType.STRING) changedAdminId: string;                                                          /** Optional: if changed on admin panel */

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false}) userId: string;

  /** Common Metadata */
  @Column({type: DataType.STRING, allowNull: false}) movedFromRole: UserRole;
  @Column({type: DataType.JSONB, defaultValue: {}}) additionalInfo: object;

  /** Metadata for UserRole.Worker */
  @Column({type: DataType.DECIMAL, defaultValue: null}) costPerHour: string;
  @Column({type: DataType.STRING, defaultValue: null}) workplace: WorkPlace;
  @Column({type: DataType.INTEGER, defaultValue: Priority.AllPriority}) priority: Priority;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Admin) changedAdmin: Admin;
}
