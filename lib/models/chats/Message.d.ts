import { Model } from "sequelize-typescript";
import { User } from "../User";
import { Chat } from "./Chat";
import { Media } from "../Media";
import { InfoMessage } from "./InfoMessage";
export declare enum MessageType {
    info = "info",
    message = "message"
}
export declare enum SenderMessageStatus {
    unread = "unread",
    read = "read"
}
export declare class Message extends Model {
    id: string;
    chatId: string;
    senderUserId: string;
    senderStatus: SenderMessageStatus;
    type: MessageType;
    text: string;
    infoMessage: InfoMessage;
    medias: Media[];
    sender: User;
    chat: Chat;
    static messageMustExists(messageId: string): Promise<void>;
    mustBeSender(userId: String): void;
    mustBeChat(chatId: String): void;
}
