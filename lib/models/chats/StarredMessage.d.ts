import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { Message } from "./Message";
export declare class StarredMessage extends Model {
    id: string;
    memberId: string;
    messageId: string;
    member: User;
    message: Message;
}
