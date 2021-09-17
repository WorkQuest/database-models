import { Model } from "sequelize-typescript";
import { User } from "./user/User";
export declare class Session extends Model {
    id: string;
    userId: string;
    user: User;
}
