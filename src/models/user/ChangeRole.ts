import {
  Column,
  DataType,
  Model,
  Table
} from "sequelize-typescript";
import {getUUID} from "../../utils";
import {UserRole, UserStatus} from "./User";


@Table
export class ChangeRole extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @Column({type: DataType.JSONB, defaultValue: {}}) previousAdditionalInfo: object;

  @Column({type: DataType.STRING, defaultValue: null}) previousRole: UserRole;
  @Column({type: DataType.INTEGER, defaultValue: UserStatus.Unconfirmed}) previousStatus: UserStatus;
}
