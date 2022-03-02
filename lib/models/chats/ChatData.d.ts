import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { Chat } from "./Chat";
export declare class ChatData extends Model {
    id: string;
    chatId: string;
    lastMessageId: string;
    chat: Chat;
    message: Message;
}
