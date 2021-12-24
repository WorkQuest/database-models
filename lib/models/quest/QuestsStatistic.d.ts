import { Model } from "sequelize-typescript";
import { User } from "../user/User";
export declare class QuestsStatistic extends Model {
    id: string;
    userId: string;
    completed: number;
    opened: number;
    user: User;
}
