import { Model } from "sequelize-typescript";
import { User } from "../user/User";
export declare class ChatsStatistic extends Model {
    id: string;
    memberId: string;
    unreadCountChats: number;
    member: User;
}
