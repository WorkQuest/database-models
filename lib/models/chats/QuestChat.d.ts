import { Model } from "sequelize-typescript";
export declare class QuestChat extends Model {
    id: string;
    questId: string;
    responseId: string;
    chatId: string;
    isActive: boolean;
}
