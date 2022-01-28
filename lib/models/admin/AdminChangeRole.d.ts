import { Model } from "sequelize-typescript";
import { Admin } from "./Admin";
import { User, UserRole } from "../user/User";
import { Priority, WorkPlace } from "../types";
export declare class AdminChangeRole extends Model {
    id: string;
    adminId: string;
    userId: string;
    currentRole: UserRole;
    additionalInfo: object;
    wagePerHour: string;
    workplace: WorkPlace;
    priority: Priority;
    admin: Admin;
    userChangeRole: User;
}
