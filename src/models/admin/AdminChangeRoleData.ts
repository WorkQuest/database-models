import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {Admin} from "./Admin";
import { AdminRole } from "./types";

@Table
export class AdminChangeRoleData extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  /** Main admin who change role to admin */
  @ForeignKey(() => Admin)
  @Column(DataType.STRING) changedByAdminId: string;                                                          /** Optional: if changed on admin panel */

  /** Admin whose role was changed */
  @ForeignKey(() => Admin)
  @Column({type: DataType.STRING, allowNull: false}) adminId: string;

  /** Common Metadata */
  @Column({type: DataType.STRING, allowNull: false}) movedFromRole: AdminRole;

  @BelongsTo(() => Admin) admin: Admin;
  @BelongsTo(() => Admin) changedByAdmin: Admin;
}
