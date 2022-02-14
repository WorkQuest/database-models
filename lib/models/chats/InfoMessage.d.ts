import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { User } from "../user/User";
export declare enum MessageAction {
    groupChatCreate = "groupChatCreate",
    groupChatAddUser = "groupChatAddUser",
    groupChatDeleteUser = "groupChatDeleteUser",
    groupChatLeaveUser = "groupChatLeaveUser",
    workerResponseOnQuest = "workerResponseOnQuest",
    employerRejectResponseOnQuest = "employerRejectResponseOnQuest",
    employerInviteOnQuest = "employerInviteOnQuest",
    workerRejectInviteOnQuest = "workerRejectInviteOnQuest",
    workerAcceptInviteOnQuest = "workerAcceptInviteOnQuest"
}
export declare class InfoMessage extends Model {
    id: string;
    messageId: string;
    memberId: string;
    messageAction: MessageAction;
    member: User;
    message: Message;
}
