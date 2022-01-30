import { Model } from 'sequelize-typescript';
import { Admin } from "../admin/Admin";
import { UserStatus, User } from "./User";
export declare enum UserBlackListStatus {
    Blocked = 0,
    Unblocked = 1
}
export declare class UserBlackList extends Model {
    id: string;
    blockedByAdminId: string;
    unblockedByAdminId: string;
    userId: string;
    reason: string;
    userStatusBeforeBlocking: UserStatus;
    status: UserBlackListStatus;
    unblockedAt: Date;
    quest: User;
    blockedByAdmin: Admin;
    unblockedByAdmin: Admin;
}
