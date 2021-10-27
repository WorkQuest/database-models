import { Model } from "sequelize-typescript";
import { User } from "../user/User";
import { Chat } from "./Chat";
export declare class ChatMember extends Model {
    id: string;
    chatId: string;
    userId: string;
    lastReadMessageId: string;
    unreadCountMessages: number;
    lastReadMessageDate: Date;
    user: User;
    chat: Chat;
}
