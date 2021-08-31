import { Model } from "sequelize-typescript";
import { User } from "./User";
export declare class QuestsStatistic extends Model {
    id: string;
    userId: string;
    completed: number;
    opened: number;
    user: User;
}
