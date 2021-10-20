import { User } from "../user/User";
import { ForumComment } from "./ForumComment";
import { Model } from 'sequelize-typescript';
export declare class ForumCommentLike extends Model {
    id: string;
    commentId: string;
    userId: string;
    user: User;
    likeComment: ForumComment;
}
