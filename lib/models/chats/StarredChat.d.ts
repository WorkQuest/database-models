import { Model } from 'sequelize-typescript';
import { Chat } from './Chat';
import { User } from "../user/User";
export declare class StarredChat extends Model {
    id: string;
    userId: string;
    chatId: string;
    user: User;
    chat: Chat;
}
