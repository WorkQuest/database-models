import { Model } from "sequelize-typescript";
import { Quest, QuestStatus } from "./Quest";
export declare class QuestBlockReason extends Model {
    id: string;
    questId: string;
    blockReason: string;
    previousStatus: QuestStatus;
    quest: Quest;
}
