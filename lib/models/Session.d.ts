import { Model } from "sequelize-typescript";
import { User } from "./User";
import { Admin } from "./Admin";
export declare class Session extends Model {
    id: string;
    userId: string;
    adminId: string;
    user: User;
    admin: Admin;
}
