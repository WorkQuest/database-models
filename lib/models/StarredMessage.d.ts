import { Model } from 'sequelize-typescript';
import { User } from './User';
import { Message } from "./Message";
export declare class StarredQuests extends Model {
    id: string;
    userId: string;
    messageId: string;
    user: User;
    message: Message;
}
