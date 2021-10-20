import { User } from "../user/User";
import { ForumPost } from "./ForumPost";
import { Model } from 'sequelize-typescript';
export declare class ForumPostLike extends Model {
    id: string;
    postId: string;
    userId: string;
    user: User;
    post: ForumPost;
}
