import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
export declare class ChatMemberDeletionData extends Model {
    id: string;
    chatMemberId: string;
    beforeDeletionMessageId: string;
    beforeDeletionMessageNumber: string;
    beforeDeletionMessage: Message;
    chatMember: ChatMember;
}
