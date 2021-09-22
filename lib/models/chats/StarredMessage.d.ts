import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { Message } from "./Message";
export declare class StarredMessage extends Model {
    id: string;
    userId: string;
    messageId: string;
    user: User;
    message: Message;
}
