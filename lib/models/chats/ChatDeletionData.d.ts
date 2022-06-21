import { Chat } from "./Chat";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { Model } from "sequelize-typescript";
export declare class ChatDeletionData extends Model {
    id: string;
    chatId: string;
    chatMemberId: string;
    beforeDeletionMessageId: string;
    beforeDeletionMessageNumber: string;
    chat: Chat;
    chatMember: ChatMember;
    beforeDeletionMessage: Message;
}
