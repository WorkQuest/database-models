import { Model } from 'sequelize-typescript';
import { AdminSession } from "./AdminSession";
import { AdminRole, AdminAccountSettings } from "./types";
import { ChatsStatistic } from "../chats/ChatsStatistic";
export declare class Admin extends Model {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: AdminRole;
    settings: AdminAccountSettings;
    isActive: boolean;
    chatStatistic: ChatsStatistic;
    sessions: AdminSession[];
    passwordCompare(pwd: string): Promise<any>;
    validateTOTP(TOTP: string): any;
    static isEmailExist(email: string): Promise<Admin>;
}
