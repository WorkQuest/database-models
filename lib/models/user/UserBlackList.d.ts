import { Model } from 'sequelize-typescript';
import { Admin } from "../admin/Admin";
import { BlackListStatus } from "../types";
import { UserStatus, User } from "./User";
export declare class UserBlackList extends Model {
    id: string;
    adminId: string;
    userId: string;
    reason: string;
    status: BlackListStatus;
    previousUserStatus: UserStatus;
    admin: Admin;
    quest: User;
}
