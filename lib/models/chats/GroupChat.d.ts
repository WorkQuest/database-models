import { Model } from "sequelize-typescript";
import { Chat } from "./Chat";
import { ChatMember } from "./ChatMember";
export declare class QuestChat extends Model {
    id: string;
    ownerId: string;
    chatId: string;
    chat: Chat;
    owner: ChatMember;
}
