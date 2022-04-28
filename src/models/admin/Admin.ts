import * as bcrypt from 'bcrypt';
import * as speakeasy from "speakeasy"
import {Column, DataType, Model, Scopes, Table, HasMany, HasOne} from 'sequelize-typescript';
import {getUUID} from '../../utils';
import {AdminSession} from "./AdminSession"
import {AdminRole, AdminAccountSettings} from "./types";
import {AdminChatStatistic} from "../chats/AdminChatStatistic";

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["password", "settings", "createdAt", "updatedAt", "deletedAt"],
    },
  },
  short: {
    attributes: [
      'id',
      'firstName',
      'lastName',
    ],
  },
  withPassword: {
    attributes: {
      include: ["password", "settings"],
    },
  },
}))
@Table({paranoid: true})
export class Admin extends Model {
  @Column({ type: DataType.STRING, defaultValue: getUUID, primaryKey: true }) id: string;

  @Column({type: DataType.STRING, unique: true}) email: string;

  @Column({
    type: DataType.STRING,
    set(value: string) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(value, salt);
      this.setDataValue('password', hash);
      },
    get() {
      return this.getDataValue('password');
    },
  }) password: string;

  @Column(DataType.STRING) firstName: string;
  @Column(DataType.STRING) lastName: string;

  @Column({type: DataType.STRING, allowNull: false}) role: AdminRole;
  @Column({type: DataType.JSONB, allowNull: false}) settings: AdminAccountSettings;
  @Column({type: DataType.BOOLEAN, defaultValue: false}) isActive: boolean;

  @HasOne(() => AdminChatStatistic) chatStatistic: AdminChatStatistic;

  @HasMany(() => AdminSession) sessions: AdminSession[];

  async passwordCompare(pwd: string) {
    return bcrypt.compareSync(pwd, this.password);
  }

  validateTOTP(TOTP: string) {
    return speakeasy.totp.verify({
      secret: this.settings.security.TOTP.secret,
      encoding: 'base32',
      token: Number(TOTP)
    });
  }

  static async isEmailExist(email: string) {
    return await Admin.findOne({
      where: { email: email }
    });
  }
}
