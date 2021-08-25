import { Model } from "sequelize-typescript";
import { User } from "./User";
export declare class UserQuestsInfo extends Model {
    id: string;
    userId: string;
    completedQuests: number;
    openedQuests: number;
    user: User;
}
