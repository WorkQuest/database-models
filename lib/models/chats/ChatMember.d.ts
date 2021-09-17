import { Model } from "sequelize-typescript";
import { User } from "../User";
import { Chat } from "./Chat";
import { Message } from "./Message";
export declare class ChatMember extends Model {
    id: string;
    chatId: string;
    userId: string;
    lastReadMessageId: string;
    lastReadMessageDate: Date;
    unreadCountMessages: number;
    user: User;
    chat: Chat;
    lastReadMessage: Message;
}
