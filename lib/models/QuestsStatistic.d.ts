import { Model } from "sequelize-typescript";
import { User } from "./User";
export declare class QuestsStatistic extends Model {
    id: string;
    userId: string;
    completedQuests: number;
    openedQuests: number;
    user: User;
}
