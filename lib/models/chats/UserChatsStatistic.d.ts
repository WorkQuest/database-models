import { Model } from "sequelize-typescript";
import { User } from "../user/User";
export declare class UserChatsStatistic extends Model {
    id: string;
    userId: string;
    unreadCountChats: number;
    user: User;
}
