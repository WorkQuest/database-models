import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
export declare enum MessageAction {
    GroupChatCreate = "GroupChatCreate",
    GroupChatAddMember = "GroupChatAddMember",
    GroupChatMemberRestored = "GroupChatMemberRestored",
    GroupChatDeleteMember = "GroupChatDeleteMember",
    GroupChatLeaveMember = "GroupChatLeaveMember",
    WorkerResponseOnQuest = "WorkerResponseOnQuest",
    EmployerRejectResponseOnQuest = "EmployerRejectResponseOnQuest",
    EmployerInviteOnQuest = "EmployerInviteOnQuest",
    WorkerRejectInviteOnQuest = "WorkerRejectInviteOnQuest",
    WorkerAcceptInviteOnQuest = "WorkerAcceptInviteOnQuest"
}
export declare class InfoMessage extends Model {
    id: string;
    messageId: string;
    memberId: string;
    messageAction: MessageAction;
    member: ChatMember;
    message: Message;
}
