import { Model } from 'sequelize-typescript';
import { AdminSession } from "./AdminSession";
export declare enum AdminRole {
    main = "main",
    dispute = "dispute",
    advertising = "advertising",
    kyc = "kyc"
}
export declare const AdminRoles: AdminRole[];
export interface AdminTOTP {
    secret: string;
}
export interface AdminSecurity {
    TOTP: AdminTOTP;
}
export interface AdminAccountSettings {
    security: AdminSecurity;
}
export interface LastSession {
    id: string;
    adminId: string;
    place: string;
    device: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class Admin extends Model {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: AdminRole;
    settings: AdminAccountSettings;
    isActivated: boolean;
    loginAt: Date;
    logoutAt: Date;
    lastSession: LastSession;
    sessions: AdminSession[];
    passwordCompare(pwd: string): Promise<any>;
    validateTOTP(TOTP: string): any;
    mustHaveAdminRole(role: AdminRole): void;
    mustBeActivated(): void;
    static isEmailExist(email: string): Promise<Admin>;
}
