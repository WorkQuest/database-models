import * as bcrypt from 'bcrypt';
import * as speakeasy from "speakeasy"
import {Column, DataType, Model, Scopes, Table, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { getUUID, error } from '../utils';
import { Errors } from "../utils/errors";
import { AdminSession } from "./AdminSession"

export enum AdminRole {
  main = "main",
  dispute = "dispute",
  advertising = "advertising",
  kyc = "kyc",
}

export enum AdminLanguages {
  en = "en",
  ru = "ru",
  ba = "ba",
  zh = "zh",
  fr = "fr",
  hi = "hi",
  in = "in",
  po = "po",
  sp = "sp",
  ae = "ae",
}

export const AdminRoles = Object.values(AdminRole)

export interface AdminTOTP {
  secret: string;
}

export interface AdminSecurity {
  TOTP: AdminTOTP;
}

export interface AdminAccountSettings {
  security: AdminSecurity;
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["password", "settings", "createdAt", "updatedAt",],
    },
  },
  withPassword: {
    attributes: {
      include: ["password", "settings", ],
    },
  },
}))
@Table({paranoid: true})
export class Admin extends Model {
  @Column({ type: DataType.STRING, defaultValue: getUUID, primaryKey: true }) id: string;

  @ForeignKey(() => AdminSession)
  @Column(DataType.STRING) lastSessionId: string;

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
  @Column({ type: DataType.JSONB, allowNull: false }) settings: AdminAccountSettings;
  @Column({type: DataType.BOOLEAN, defaultValue: false}) isActivated: boolean;

  @Column(DataType.INTEGER) age: number;
  @Column(DataType.INTEGER) resolvedDisputes: number;
  @Column(DataType.TEXT) about: string;
  @Column({type: DataType.ARRAY(DataType.STRING), defaultValue: []}) languages: Array<AdminLanguages>;

  @BelongsTo(() => AdminSession,{ constraints: false, foreignKey: 'lastSessionId' }) lastSession: AdminSession;

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

  mustHaveAdminRole(role: AdminRole) {
    if (this.role !== role) {
      throw error(Errors.InvalidRole, 'Invalid admin type', {});
    }
  }

  mustBeActivated(): void {
    if(!this.isActivated) {
      throw error(Errors.InvalidStatus, 'Admin is deactivate', {})
    }
  }

  static async isEmailExist(email: string) {
    return await Admin.findOne({
      where: { email: email }
    });
  }
}
