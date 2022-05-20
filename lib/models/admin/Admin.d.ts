import { Model } from 'sequelize-typescript';
import { AdminSession } from "./AdminSession";
import { AdminRole, AdminAccountSettings } from "./types";
import { AdminWallet } from "../wallet/AdminWallet";
export declare class Admin extends Model {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: AdminRole;
    settings: AdminAccountSettings;
    isActive: boolean;
    sessions: AdminSession[];
    wallet: AdminWallet;
    passwordCompare(pwd: string): Promise<any>;
    validateTOTP(TOTP: string): any;
    static isEmailExist(email: string): Promise<Admin>;
}
