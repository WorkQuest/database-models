import { Model } from "sequelize-typescript";
import { Quest } from "../quest/Quest";
import { QuestsResponse } from "../quest/QuestsResponse";
import { Chat } from "./Chat";
export declare enum QuestChatStatuses {
    open = 0,
    close = 1
}
export declare class QuestChat extends Model {
    id: string;
    employerId: string;
    workerId: string;
    questId: string;
    responseId: string;
    chatId: string;
    status: QuestChatStatuses;
    quest: Quest;
    response: QuestsResponse;
    chat: Chat;
}
