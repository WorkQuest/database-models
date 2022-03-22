import { Model } from "sequelize-typescript";
import { User } from "../user/User";
import { Admin } from "../admin/Admin";
import { MemberType } from "../types";
export declare class ChatsStatistic extends Model {
    id: string;
    userId: string;
    adminId: string;
    type: MemberType;
    unreadCountChats: number;
    user: User;
    admin: Admin;
}
