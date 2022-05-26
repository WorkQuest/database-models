import { Model } from "sequelize-typescript";
import { Admin } from "../admin/Admin";
export declare class AdminChatStatistic extends Model {
    id: string;
    adminId: string;
    unreadCountChats: number;
    admin: Admin;
}
