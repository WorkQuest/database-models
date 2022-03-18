import { Model } from "sequelize-typescript";
import { User } from "../user/User";
import { Chat } from "./Chat";
import { Admin } from "../admin/Admin";
import { ChatMemberDeletionData } from "./ChatMemberDeletionData";
import { ChatMemberData } from "./ChatMemberData";
export declare enum MemberType {
    Admin = "admin",
    User = "user"
}
export declare enum MemberStatus {
    Active = "active",
    Deleted = "deleted"
}
export declare class ChatMember extends Model {
    id: string;
    chatId: string;
    userId: string;
    adminId: string;
    type: MemberType;
    status: MemberStatus;
    user: User;
    admin: Admin;
    chat: Chat;
    chatMemberData: ChatMemberData;
    chatMemberDeletionData: ChatMemberDeletionData;
}
