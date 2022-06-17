import { Model } from "sequelize-typescript";
import { Admin } from "./Admin";
import { AdminRole } from "./types";
export declare class AdminChangeRoleData extends Model {
    id: string;
    changedByAdminId: string;
    adminId: string;
    movedFromRole: AdminRole;
    admin: Admin;
    changedByAdmin: Admin;
}
