import { User } from "../user/User";
import { Discussion } from "./Discussion";
import { Model } from 'sequelize-typescript';
export declare class DiscussionLike extends Model {
    id: string;
    discussionId: string;
    userId: string;
    user: User;
    discussion: Discussion;
}
