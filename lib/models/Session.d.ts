import { Model } from "sequelize-typescript";
import { User } from "./User";
export interface UserPlace {
    country: string;
    city: string;
}
export declare class Session extends Model {
    id: string;
    userId: string;
    place: UserPlace;
    device: string;
    ipAddress: string;
    user: User;
}
