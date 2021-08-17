import { Model } from "sequelize-typescript";
import { User } from "./User";
import { News } from "./News";
import { Media } from "./Media";
import { LikeComment } from "./CommentLike";
export declare class Comment extends Model {
    id: string;
    authorId: string;
    newsId: string;
    rootCommentId: string;
    text: string;
    author: User;
    news: News;
    rootComment: Comment;
    subComments: Comment[];
    likeComment: LikeComment[];
    medias: Media[];
    userLikes: User[];
}
