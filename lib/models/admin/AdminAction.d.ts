import { Model } from "sequelize-typescript";
import { Admin } from "./Admin";
export declare class AdminAction extends Model {
    id: string;
    adminId: string;
    action: string;
    admin: Admin;
}
