import { Model } from 'sequelize-typescript';
export declare enum Role {
    main = "main",
    disput = "disput",
    advertising = "advertising",
    KYC = "KYC"
}
export declare const Roles: Role[];
export interface TOTP {
    secret: string;
}
export interface Security {
    TOTP: TOTP;
}
export interface AccountSettings {
    security: Security;
}
export declare class Admin extends Model {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    adminRole: Role;
    settings: AccountSettings;
    isActive: boolean;
    passwordCompare(pwd: string): Promise<any>;
    validateTOTP(TOTP: string): any;
}
