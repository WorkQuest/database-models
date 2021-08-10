import { Model } from "sequelize-typescript";
import { User } from "./User";
import { Chat } from "./Chat";
import { Media } from "./Media";
export declare class Message extends Model {
    id: string;
    senderUserId: string;
    chatId: string;
    text: string;
    sender: User;
    chat: Chat;
    medias: Media[];
    mastBeSender(userId: String): void;
    mastBeChat(chatId: String): void;
}
