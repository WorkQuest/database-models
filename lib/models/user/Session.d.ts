import { Model } from "sequelize-typescript";
import { User } from "./User";
import { Place } from "../types";
export declare class Session extends Model {
    id: string;
    userId: string;
    place: Place;
    invalidating: boolean;
    ip: string;
    device: string;
    logoutAt: Date;
    user: User;
}
