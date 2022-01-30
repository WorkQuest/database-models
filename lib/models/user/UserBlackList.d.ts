import { Model } from 'sequelize-typescript';
import { Admin } from "../admin/Admin";
import { UserStatus, User } from "./User";
export declare enum UserBlackListStatus {
    Blocked = 0,
    Unblocked = 1
}
export declare class UserBlackList extends Model {
    id: string;
    adminId: string;
    userId: string;
    reason: string;
    userStatusBeforeBlocking: UserStatus;
    status: UserBlackListStatus;
    unlockedAt: Date;
    admin: Admin;
    quest: User;
}
