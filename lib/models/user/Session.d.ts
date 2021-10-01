import { Model } from "sequelize-typescript";
import { User } from "./User";
export interface UserLoginPlace {
    country: string | null;
    city: string | null;
}
export declare class Session extends Model {
    id: string;
    userId: string;
    place: UserLoginPlace;
    device: string;
    ipAddress: string;
    isActive: boolean;
    logoutAt: Date;
    lastActionTime: Date;
    user: User;
}
