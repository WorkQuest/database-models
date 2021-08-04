import { Model } from "sequelize-typescript";
import { Admin } from "./Admin";
export declare class AdminSession extends Model {
    id: string;
    userId: string;
    adminId: string;
    admin: Admin;
}
