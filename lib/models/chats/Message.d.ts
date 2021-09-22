import { Model } from "sequelize-typescript";
import { User } from "../user/User";
import { Chat } from "./Chat";
import { Media } from "../Media";
import { InfoMessage } from "./InfoMessage";
import { StarredMessage } from "./StarredMessage";
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
    star: StarredMessage;
    medias: Media[];
    sender: User;
    chat: Chat;
    mustBeSender(userId: String): void;
    mustBeChat(chatId: String): void;
}
