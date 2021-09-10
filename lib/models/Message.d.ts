import { Model } from "sequelize-typescript";
import { User } from "./User";
import { Chat } from "./Chat";
import { Media } from "./Media";
import { StarredMessage } from "./StarredMessage";
export declare class Message extends Model {
    id: string;
    senderUserId: string;
    chatId: string;
    text: string;
    medias: Media[];
    sender: User;
    chat: Chat;
    starredMessage: StarredMessage;
    static messageMustExists(messageId: string): Promise<void>;
    mustBeSender(userId: String): void;
    mustBeChat(chatId: String): void;
}
