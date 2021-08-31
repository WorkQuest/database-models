import { Model } from "sequelize-typescript";
import { User, UserRole } from "./User";
export declare enum ChangeRoleStatus {
    Canceled = -1,
    Pending = 0,
    Completed = 1
}
export declare class RoleChange extends Model {
    id: string;
    userId: string;
    status: ChangeRoleStatus;
    changedFrom: UserRole;
    changedTo: UserRole;
    changedAt: Date;
    user: User;
}
