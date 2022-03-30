import { Model } from "sequelize-typescript";
import { User } from "../user/User";
import { MemberType } from "../types";
export declare class UserChatsStatistic extends Model {
    id: string;
    userId: string;
    type: MemberType;
    unreadCountChats: number;
    user: User;
}
