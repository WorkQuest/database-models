import { Model } from 'sequelize-typescript';
import { User } from './User';
import { Chat } from './Chats/Chat';
export declare class StarredChat extends Model {
    id: string;
    userId: string;
    chatId: string;
    user: User;
    chat: Chat;
}
