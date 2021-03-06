import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { Model } from "sequelize-typescript";
export declare enum ReasonForRemovingFromChat {
    Left = "Left",
    Removed = "Removed",
    ResolvedDispute = "ResolvedDispute"
}
export declare class ChatMemberDeletionData extends Model {
    id: string;
    chatMemberId: string;
    beforeDeletionMessageId: string;
    reason: ReasonForRemovingFromChat;
    beforeDeletionMessageNumber: string;
    chatMember: ChatMember;
    message: Message;
}
