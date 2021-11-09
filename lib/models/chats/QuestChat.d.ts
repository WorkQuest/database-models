import { Model } from "sequelize-typescript";
import { Quest } from "../quest/Quest";
import { QuestsResponse } from "../quest/QuestsResponse";
import { Chat } from "./Chat";
import { User } from "../user/User";
export declare enum QuestChatStatuses {
    Open = 0,
    Close = 1
}
export declare class QuestChat extends Model {
    id: string;
    employerId: string;
    workerId: string;
    questId: string;
    responseId: string;
    chatId: string;
    status: QuestChatStatuses;
    employer: User;
    worker: User;
    quest: Quest;
    response: QuestsResponse;
    chat: Chat;
}
