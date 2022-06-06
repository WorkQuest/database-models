import { Message } from "./Message";
import { User } from "../user/User";
import { Model } from "sequelize-typescript";
import { Chat } from "./Chat";
export declare class ChatDeletionData extends Model {
    id: string;
    chatId: string;
    userId: string;
    beforeDeletionMessageId: string;
    beforeDeletionMessageNumber: string;
    chat: Chat;
    user: User;
    beforeDeletionMessage: Message;
}
