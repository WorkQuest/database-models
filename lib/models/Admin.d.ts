import { Model } from 'sequelize-typescript';
import { AdminSession } from "./AdminSession";
export declare enum AminRole {
    main = "main",
    dispute = "dispute",
    advertising = "advertising",
    kyc = "kyc"
}
export declare const AdminRoles: AminRole[];
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
    role: AminRole;
    settings: AdminAccountSettings;
    isActive: boolean;
    sessions: AdminSession[];
    passwordCompare(pwd: string): Promise<any>;
    validateTOTP(TOTP: string): any;
    MustHaveAdminRole(role: AminRole): void;
    static isEmailExist(email: string): Promise<Admin>;
}
