import { Model } from "sequelize-typescript";
import { UserRole, UserStatus } from "./User";
export declare class ChangeRole extends Model {
    id: string;
    previousAdditionalInfo: object;
    previousRole: UserRole;
    previousStatus: UserStatus;
}
