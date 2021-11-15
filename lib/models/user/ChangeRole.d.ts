import { Model } from "sequelize-typescript";
import { User, UserRole, UserStatus } from "./User";
export declare class ChangeRole extends Model {
    id: string;
    userId: string;
    previousAdditionalInfo: object;
    previousRole: UserRole;
    previousStatus: UserStatus;
    user: User;
}
