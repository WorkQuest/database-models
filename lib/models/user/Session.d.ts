import { Model } from "sequelize-typescript";
import { User } from "./User";
export declare type UserLoginPlace = {
    country: string | null;
    city: string | null;
};
export declare class Session extends Model {
    id: string;
    userId: string;
    place: UserLoginPlace;
    invalidating: boolean;
    ip: string;
    device: string;
    logoutAt: Date;
    user: User;
}
