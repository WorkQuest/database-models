import { Model } from "sequelize-typescript";
export declare class ReportsPlatformStatistic extends Model {
    users: number;
    declinedUsers: number;
    decidedUsers: number;
    quests: number;
    declinedQuests: number;
    decidedQuests: number;
    date: Date;
}
