import { Model } from "sequelize-typescript";
import { User } from "../User";
import { Chat } from "./Chat";
import { Media } from "../Media";
export declare enum MessageType {
    informational = 0,
    common = 1
}
export declare class Message extends Model {
    id: string;
    senderUserId: string;
    actionUserId: string;
    chatId: string;
    type: MessageType;
    text: string;
    medias: Media[];
    sender: User;
    actionUser: User;
    chat: Chat;
    mustBeSender(userId: String): void;
    adminMustBeSender(adminId: String): void;
    mustBeChat(chatId: String): void;
}
