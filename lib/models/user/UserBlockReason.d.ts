import { Model } from "sequelize-typescript";
import { User, UserStatus } from "./User";
export declare class UserBlockReason extends Model {
    id: string;
    userId: string;
    blockReason: string;
    previousStatus: UserStatus;
    isLast: boolean;
    user: User;
}
