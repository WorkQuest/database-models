import { Model } from 'sequelize-typescript';
import { User } from "./User";
import { ForumPostComment } from "./ForumPostComment";
export declare class ForumPostCommentLike extends Model {
    id: string;
    forumPostCommentId: string;
    userId: string;
    likeComment: ForumPostComment;
    user: User;
}
