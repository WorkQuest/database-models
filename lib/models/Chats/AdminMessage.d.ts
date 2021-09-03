import { Model } from "sequelize-typescript";
import { Media } from "../Media";
import { Admin } from "../Admin";
import { AdminChat } from "./AdminChat";
export declare enum MessageType {
    informational = 0,
    common = 1
}
export declare class AdminMessage extends Model {
    id: string;
    senderAdminId: string;
    chatId: string;
    type: MessageType;
    text: string;
    medias: Media[];
    adminSender: Admin;
    chat: AdminChat;
    mustBeSender(adminId: String): void;
    mustBeChat(chatId: String): void;
}
