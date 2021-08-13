import { Model } from "sequelize-typescript";
import { User, UserStatus } from "./User";
export declare class UserBlockReason extends Model {
    id: string;
    adminId: string;
    blockReason: string;
    previousStatus: UserStatus;
    user: User;
}
