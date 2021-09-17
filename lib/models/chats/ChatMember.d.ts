import { Model } from "sequelize-typescript";
import { User } from "../user/User";
import { Chat } from "./Chat";
export declare class ChatMember extends Model {
    id: string;
    chatId: string;
    userId: string;
    unreadCountMessages: number;
    user: User;
    chat: Chat;
}
