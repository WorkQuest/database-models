import { Quest } from './Quest';
import { Model } from 'sequelize-typescript';
export declare enum QuestRaiseStatus {
    Paid = 0,
    Closed = 1
}
export declare enum QuestRaiseDuration {
    OneDay = 1,
    FiveDays = 5,
    SevenDays = 7
}
export declare enum QuestRaiseType {
    GoldPlus = 0,
    Gold = 1,
    Silver = 2,
    Bronze = 3
}
export declare class QuestRaiseView extends Model {
    id: string;
    questId: string;
    status: QuestRaiseStatus;
    duration: QuestRaiseDuration;
    type: QuestRaiseType;
    endedAt: Date;
    quest: Quest;
}