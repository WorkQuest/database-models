import { Model } from "sequelize-typescript";
interface UserSettings {
    emailConfirm: string | null;
}
export declare enum UserStatus {
    Unconfirmed = 0,
    Confirmed = 1
}
export declare enum UserRole {
    Employer = "employer",
    Worker = "worker"
}
export declare class User extends Model {
    id: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
    role: UserRole;
    settings: UserSettings;
    status: UserStatus;
    passwordCompare(pwd: string): Promise<any>;
}
export {};
