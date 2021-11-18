import { User } from "../user/User";
import { DiscussionComment } from "./DiscussionComment";
import { Model } from 'sequelize-typescript';
export declare class DiscussionCommentLike extends Model {
    id: string;
    commentId: string;
    userId: string;
    user: User;
    likeComment: DiscussionComment;
}
