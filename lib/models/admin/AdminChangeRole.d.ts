import { Model } from "sequelize-typescript";
import { User, UserRole } from "../user/User";
import { Priority, WorkPlace } from "../types";
export declare class AdminChangeRole extends Model {
    id: string;
    adminId: string;
    userId: string;
    role: UserRole;
    additionalInfo: object;
    wagePerHour: string;
    workplace: WorkPlace;
    priority: Priority;
    userChangeRole: User;
}
