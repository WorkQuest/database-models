import { Model } from "sequelize-typescript";
import { Quest } from "../quest/Quest";
import { QuestsResponse } from "../quest/QuestsResponse";
import { Chat } from "./Chat";
export declare class QuestChat extends Model {
    id: string;
    questId: string;
    responseId: string;
    chatId: string;
    isActive: boolean;
    quest: Quest;
    response: QuestsResponse;
    chat: Chat;
}
