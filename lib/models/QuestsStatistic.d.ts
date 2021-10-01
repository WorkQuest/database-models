import { Model } from "sequelize-typescript";
import { User } from "./user/User";
export declare class QuestsStatistic extends Model {
    id: string;
    userId: string;
    completedQuests: number;
    openedQuests: number;
    user: User;
}
