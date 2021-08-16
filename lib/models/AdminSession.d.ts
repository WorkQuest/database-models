import { Model } from "sequelize-typescript";
import { Admin } from "./Admin";
export interface AdminPlace {
    country: string;
    city: string;
}
export declare class AdminSession extends Model {
    id: string;
    adminId: string;
    place: AdminPlace;
    device: string;
    isActive: boolean;
    logoutAt: Date;
    lastActionTime: Date;
    admin: Admin;
}
