import { Model } from "sequelize-typescript";
import { Media } from "../Media";
import { InfoMessage } from "./InfoMessage";
import { StarredMessage } from "./StarredMessage";
import { ChatMember } from "./ChatMember";
import { ChatData } from "./ChatData";
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
    chatData: ChatData;
}
