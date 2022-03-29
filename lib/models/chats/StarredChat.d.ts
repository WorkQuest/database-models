import { Model } from 'sequelize-typescript';
import { Chat } from './Chat';
import { User } from "../user/User";
import { Admin } from "../admin/Admin";
export declare class StarredChat extends Model {
    id: string;
    userId: string;
    adminId: string;
    chatId: string;
    user: User;
    admin: Admin;
    chat: Chat;
}
