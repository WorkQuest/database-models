import { Model } from "sequelize-typescript";
import { User } from "./User";
export declare class Session extends Model {
    id: string;
    userId: string;
    place: string;
    device: string;
    user: User;
}
