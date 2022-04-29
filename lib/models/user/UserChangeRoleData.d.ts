import { Model } from "sequelize-typescript";
import { User, UserRole } from "./User";
import { Priority, WorkPlace } from "../types";
import { Admin } from "../admin/Admin";
export declare class UserChangeRoleData extends Model {
    id: string;
    changedAdminId: string;
    userId: string;
    movedFromRole: UserRole;
    additionalInfo: object;
    costPerHour: string;
    workplace: WorkPlace;
    priority: Priority;
    user: User;
    changedAdmin: Admin;
}
