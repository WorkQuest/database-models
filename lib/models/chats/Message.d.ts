import { Model } from "sequelize-typescript";
import { Chat } from "./Chat";
import { Media } from "../Media";
import { InfoMessage } from "./InfoMessage";
import { StarredMessage } from "./StarredMessage";
import { ChatMember } from "./ChatMember";
export declare enum MessageType {
    Info = "Info",
    Message = "Message"
}
export declare enum SenderMessageStatus {
    Unread = "Unread",
    Read = "Read"
}
export declare class Message extends Model {
    id: string;
    number: number;
    chatId: string;
    senderMemberId: string;
    senderStatus: SenderMessageStatus;
    type: MessageType;
    text: string;
    infoMessage: InfoMessage;
    star: StarredMessage;
    medias: Media[];
    sender: ChatMember;
    chat: Chat;
}
