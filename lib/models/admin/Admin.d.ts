import { Model } from 'sequelize-typescript';
import { AdminSession } from "./AdminSession";
import { AdminRole, AdminAccountSettings } from "./types";
import { AdminChatStatistic } from "../chats/AdminChatStatistic";
export declare class Admin extends Model {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: AdminRole;
    settings: AdminAccountSettings;
    isActive: boolean;
    chatStatistic: AdminChatStatistic;
    sessions: AdminSession[];
    passwordCompare(pwd: string): Promise<any>;
    validateTOTP(TOTP: string): any;
    static isEmailExist(email: string): Promise<Admin>;
}
