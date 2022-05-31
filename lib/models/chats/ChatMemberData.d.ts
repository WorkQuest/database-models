import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
export declare class ChatMemberData extends Model {
    id: string;
    chatMemberId: string;
    lastReadMessageId: string;
    unreadCountMessages: number;
    lastReadMessageNumber: number;
    lastReadMessage: Message;
    chatMember: ChatMember;
}
