import { Model } from 'sequelize-typescript';
import { AdminSession } from "./AdminSession";
import { Language } from "./Language";
import { Media } from "./Media";
export declare enum AdminRole {
    main = "main",
    dispute = "dispute",
    advertising = "advertising",
    kyc = "kyc"
}
export declare enum AdminLanguages {
    en = "en",
    ru = "ru",
    ba = "ba",
    zh = "zh",
    fr = "fr",
    hi = "hi",
    in = "in",
    po = "po",
    sp = "sp",
    ae = "ae"
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
export interface AdditionalInfo {
    age: number | null;
    resolvedDisputes: number | null;
    about: string | null;
}
export declare class Admin extends Model {
    id: string;
    lastSessionId: string;
    avatarId: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: AdminRole;
    settings: AdminAccountSettings;
    isActivated: boolean;
    additionalInfo: AdditionalInfo;
    lastSession: AdminSession;
    avatar: Media;
    sessions: AdminSession[];
    languages: Language[];
    passwordCompare(pwd: string): Promise<any>;
    validateTOTP(TOTP: string): any;
    mustHaveAdminRole(role: AdminRole): void;
    mustBeActivated(): void;
    static isEmailExist(email: string): Promise<Admin>;
}
