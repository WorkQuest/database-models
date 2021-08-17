import { Model } from 'sequelize-typescript';
import { User } from "./User";
import { Comment } from "./Comment";
export declare class LikeComment extends Model {
    id: string;
    commentId: string;
    userId: string;
    likeComment: Comment;
    user: User;
}
