import { Model } from "sequelize-typescript";
import { User } from "./User";
import { UserLoginPlace } from "./types";
export declare class Session extends Model {
    id: string;
    userId: string;
    invalidating: boolean;
    ip: string;
    device: string;
    logoutAt: Date;
    place: UserLoginPlace;
    user: User;
}
