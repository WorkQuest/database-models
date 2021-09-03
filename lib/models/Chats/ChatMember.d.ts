import { Model } from "sequelize-typescript";
import { User } from "../User";
import { Chat } from "./Chat";
export declare class ChatMember extends Model {
    id: string;
    chatId: string;
    userId: string;
    user: User;
    chat: Chat;
}
