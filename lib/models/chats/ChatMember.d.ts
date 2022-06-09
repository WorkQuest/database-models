import { Model } from "sequelize-typescript";
import { User } from "../user/User";
import { Chat } from "./Chat";
import { Admin } from "../admin/Admin";
import { ChatMemberDeletionData } from "./ChatMemberDeletionData";
import { ChatMemberData } from "./ChatMemberData";
import { MemberType } from "../types";
export declare enum MemberStatus {
    Deleted = -1,
    Active = 0
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
