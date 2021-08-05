import { Model } from 'sequelize-typescript';
import { AdminSession } from "./AdminSession";
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
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    adminRole: Role;
    settings: AdminAccountSettings;
    isActive: boolean;
    sessions: AdminSession[];
    passwordCompare(pwd: string): Promise<any>;
    validateTOTP(TOTP: string): any;
}
