import { Model } from "sequelize-typescript";
import { Admin } from "./Admin";
export interface AdminLoginPlace {
    country: string | null;
    city: string | null;
}
export declare class AdminSession extends Model {
    id: string;
    adminId: string;
    place: AdminLoginPlace;
    device: string;
    isActive: boolean;
    logoutAt: Date;
    lastActionTime: Date;
    admin: Admin;
}
