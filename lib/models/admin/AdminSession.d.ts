import { Model } from "sequelize-typescript";
import { Admin } from "./Admin";
import { Place } from "../types";
export declare class AdminSession extends Model {
    id: string;
    adminId: string;
    place: Place;
    invalidating: boolean;
    ip: string;
    device: string;
    logoutAt: Date;
    admin: Admin;
}
