import { Model } from "sequelize-typescript";
import { Chat } from "./Chat";
import { ChatMember } from "./ChatMember";
export declare class GroupChat extends Model {
    id: string;
    ownerId: string;
    chatId: string;
    chat: Chat;
    owner: ChatMember;
}
