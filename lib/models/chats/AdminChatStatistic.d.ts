import { Model } from "sequelize-typescript";
import { Admin } from "../admin/Admin";
import { MemberType } from "../types";
export declare class AdminChatStatistic extends Model {
    id: string;
    adminId: string;
    type: MemberType;
    unreadCountChats: number;
    admin: Admin;
}
