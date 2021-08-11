import { Model } from "sequelize-typescript";
import { Admin } from "./Admin";
export declare class AdminSession extends Model {
    id: string;
    adminId: string;
    place: string;
    device: string;
    admin: Admin;
}
