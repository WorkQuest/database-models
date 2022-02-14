import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { Chat } from './Chat';
export declare class StarredChat extends Model {
    id: string;
    memberId: string;
    chatId: string;
    member: User;
    chat: Chat;
}
