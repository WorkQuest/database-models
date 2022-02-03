import { Model } from 'sequelize-typescript';
import { Admin } from "../admin/Admin";
import { UserStatus, User } from "./User";
import { BlackListStatus } from '../types';
export declare class UserBlackList extends Model {
    id: string;
    blockedByAdminId: string;
    unblockedByAdminId: string;
    userId: string;
    reason: string;
    userStatusBeforeBlocking: UserStatus;
    status: BlackListStatus;
    unblockedAt: Date;
    user: User;
    blockedByAdmin: Admin;
    unblockedByAdmin: Admin;
}
