import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { Chat } from './Chat';
export declare class StarredChat extends Model {
    id: string;
    userId: string;
    chatId: string;
    user: User;
    chat: Chat;
}
