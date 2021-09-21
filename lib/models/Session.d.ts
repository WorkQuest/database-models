import { Model } from "sequelize-typescript";
import { User } from "./User";
export interface UserLoginPlace {
    country: string | null;
    city: string | null;
}
export declare class Session extends Model {
    id: string;
    userId: string;
    invalidating: boolean;
    place: UserLoginPlace;
    ip: string;
    device: string;
    logoutAt: Date;
    lastActionTime: Date;
    user: User;
}
