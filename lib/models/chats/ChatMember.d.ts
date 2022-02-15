import { Model } from "sequelize-typescript";
import { User } from "../user/User";
import { Admin } from "../admin/Admin";
export declare enum MemberRole {
    Admin = "admin",
    User = "user"
}
export declare class ChatMember extends Model {
    id: string;
    chatId: string;
    userId: string;
    adminId: string;
    role: MemberRole;
    lastReadMessageId: string;
    unreadCountMessages: number;
    lastReadMessageNumber: number;
    user: User;
    admin: Admin;
}
