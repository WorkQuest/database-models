import { Quest } from '../quest/Quest';
import { Model } from 'sequelize-typescript';
import { QuestRaiseDuration, QuestRaiseStatus, QuestRaiseType } from "./types";
export declare class QuestRaiseView extends Model {
    id: string;
    questId: string;
    status: QuestRaiseStatus;
    duration: QuestRaiseDuration;
    type: QuestRaiseType;
    endedAt: Date;
    quest: Quest;
}
