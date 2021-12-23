import { Model } from "sequelize-typescript";
import { User } from "../user/User";
export declare class ChatsStatistic extends Model {
    id: string;
    userId: string;
    unreadChats: number;
    user: User;
}
