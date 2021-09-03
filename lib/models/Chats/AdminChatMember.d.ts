import { Model } from "sequelize-typescript";
import { Admin } from "../Admin";
import { AdminChat } from "./AdminChat";
export declare class AdminChatMember extends Model {
    id: string;
    chatId: string;
    adminId: string;
    admin: Admin;
    chat: AdminChat;
}
