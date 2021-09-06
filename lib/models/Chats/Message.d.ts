import { Model } from "sequelize-typescript";
import { User } from "../User";
import { Chat } from "./Chat";
import { Media } from "../Media";
export declare enum MessageType {
    informational = 0,
    message = 1
}
export declare enum SenderMessageStatus {
    unread = 0,
    read = 1
}
export declare class Message extends Model {
    id: string;
    chatId: string;
    senderUserId: string;
    senderStatus: SenderMessageStatus;
    type: MessageType;
    text: string;
    medias: Media[];
    sender: User;
    chat: Chat;
    mustBeSender(userId: String): void;
    adminMustBeSender(adminId: String): void;
    mustBeChat(chatId: String): void;
}
