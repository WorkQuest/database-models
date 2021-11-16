import {
  BelongsTo,
  Column,
  DataType, ForeignKey,
  Model,
  Table
} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {User, UserRole, UserStatus} from "./User";


@Table
export class ChangeRole extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column(DataType.STRING) userId: string;

  @Column({type: DataType.JSONB, defaultValue: {}}) previousAdditionalInfo: object;

  @Column({type: DataType.STRING, defaultValue: null}) previousRole: UserRole;

  @Column({type: DataType.DATE}) changeRoleAt: Date;

  @BelongsTo(() => User) user: User;
}
