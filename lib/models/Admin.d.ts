import { Model } from 'sequelize-typescript';
import { Session } from "./Session";
export declare enum Role {
    main = "main",
    disput = "disput",
    advertising = "advertising",
    KYC = "kyc"
}
export declare const Roles: Role[];
export interface AdminTOTP {
    secret: string;
}
export interface AdminSecurity {
    TOTP: AdminTOTP;
}
export interface AdminAccountSettings {
    security: AdminSecurity;
}
export declare class Admin extends Model {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    adminRole: Role;
    settings: AdminAccountSettings;
    isActive: boolean;
    sessions: Session[];
    passwordCompare(pwd: string): Promise<any>;
    validateTOTP(TOTP: string): any;
}
