import { Model } from 'sequelize-typescript';
import { Quest } from './Quest';
import { User } from "../user/User";
export declare enum QuestRaiseStatus {
    Paid = 0,
    Unpaid = 1,
    Closed = 2
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
    userId: string;
    status: QuestRaiseStatus;
    duration: QuestRaiseDuration;
    type: QuestRaiseType;
    quest: Quest;
    user: User;
}
