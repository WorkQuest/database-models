import { Model } from 'sequelize-typescript';
import { User } from "./User";
import { ForumPost } from "./ForumPost";
export declare class ForumPostLike extends Model {
    id: string;
    forumPostId: string;
    userId: string;
    postId: ForumPost;
    user: User;
}
