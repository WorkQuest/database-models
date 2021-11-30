import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { Discussion } from "./Discussion";
export declare class StarredMessage extends Model {
    id: string;
    userId: string;
    discussionId: string;
    user: User;
    discussion: Discussion;
}
