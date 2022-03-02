import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
export declare class ChatMemberData extends Model {
    id: string;
    chatMemberId: string;
    lastReadMessageId: string;
    message: Message;
    member: ChatMember;
}
