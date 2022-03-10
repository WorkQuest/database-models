import { Model } from 'sequelize-typescript';
import { Message } from "./Message";
import { User } from "../user/User";
export declare class StarredMessage extends Model {
    id: string;
    userId: string;
    messageId: string;
    member: User;
    message: Message;
}
