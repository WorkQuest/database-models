import {
    Column, DataType, Model, Scopes, Table, HasOne, HasMany,
  } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';
import { getUUID, } from '../utils';
import * as speakeasy from "speakeasy"

  export enum Role {
    main = "main",
    disput = "disput",
    advertising = "advertising",
    KYC = "kyc",
  }
  export const Roles= Object.values(Role)

  export interface TOTP {
    secret: string;
  }

  export interface Security {
    TOTP: TOTP;
  }

  export interface AccountSettings {
    security: Security
  }

  const defaultAccountSettings: AccountSettings = {
    security: null
  };

  @Scopes(() => ({
    defaultScope: {
      attributes: {
        exclude: ["password", "settings", "createdAt", "updatedAt", "deletedAt"],
      },
    },
    withPassword: {
      attributes: {
        include: ["password", "settings"],
      },
    },
  }))
  @Table
  export class Admin extends Model {
    @Column({ type: DataType.STRING, defaultValue: getUUID, primaryKey: true }) 
    id: string;

    @Column({type: DataType.STRING, unique: true}) 
    email: string
  
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
    })
    password: string;

    @Column(DataType.STRING) 
    firstName: string
    @Column(DataType.STRING) 
    lastName: string

    @Column({type: DataType.STRING, defaultValue: Role.main}) 
    adminRole: Role
    @Column({ type: DataType.JSONB, defaultValue: defaultAccountSettings})
    settings: AccountSettings

    @Column({type: DataType.BOOLEAN, defaultValue: true})
    isActive: boolean

    async passwordCompare(pwd: string) {
      return bcrypt.compareSync(pwd, this.password);
    }

    validateTOTP(TOTP: string){
      return speakeasy.totp.verify({
        secret: this.settings.security.TOTP.secret,
        encoding: 'base32',
        token: Number(TOTP)
      });
    }
  }