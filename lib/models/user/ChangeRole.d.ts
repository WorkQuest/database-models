import { Model } from "sequelize-typescript";
import { User, UserRole } from "./User";
export declare class ChangeRole extends Model {
    id: string;
    userId: string;
    previousAdditionalInfo: object;
    previousRole: UserRole;
    changeRoleAt: Date;
    user: User;
}
