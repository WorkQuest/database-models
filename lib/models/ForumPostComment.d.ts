import { Model } from "sequelize-typescript";
import { User } from "./User";
import { ForumPost } from "./ForumPost";
import { Media } from "./Media";
import { ForumPostCommentLike } from "./ForumPostCommentLike";
export declare class ForumPostComment extends Model {
    id: string;
    authorId: string;
    forumPostId: string;
    rootCommentId: string;
    text: string;
    author: User;
    forumPost: ForumPost;
    rootComment: ForumPostComment;
    subComments: ForumPostComment[];
    likeComment: ForumPostCommentLike[];
    medias: Media[];
    userLikes: User[];
}
