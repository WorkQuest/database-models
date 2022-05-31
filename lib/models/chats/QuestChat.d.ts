import { Model } from "sequelize-typescript";
import { Quest } from "../quest/Quest";
import { QuestsResponse } from "../quest/QuestsResponse";
import { Chat } from "./Chat";
import { User } from "../user/User";
import { Admin } from "../admin/Admin";
export declare enum QuestChatStatus {
    Close = -1,
    Open = 0
}
export declare class QuestChat extends Model {
    id: string;
    employerId: string;
    workerId: string;
    disputeAdminId: string;
    questId: string;
    responseId: string;
    chatId: string;
    status: QuestChatStatus;
    chat: Chat;
    quest: Quest;
    response: QuestsResponse;
    worker: User;
    employer: User;
    disputeAdmin: Admin;
}
