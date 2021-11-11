import { Model } from "sequelize-typescript";
import { User, UserStatus } from "./user/User";
export declare class UserBlockReason extends Model {
    id: string;
    userId: string;
    blockReason: string;
    previousStatus: UserStatus;
    isLast: boolean;
    user: User;
}
