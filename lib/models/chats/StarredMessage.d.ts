import { Model } from 'sequelize-typescript';
import { Message } from "./Message";
import { User } from "../user/User";
import { Admin } from "../admin/Admin";
export declare class StarredMessage extends Model {
    id: string;
    userId: string;
    adminId: string;
    messageId: string;
    user: User;
    admin: Admin;
    message: Message;
}
