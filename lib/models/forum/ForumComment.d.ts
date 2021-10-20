import { Media } from "../Media";
import { User } from "../user/User";
import { ForumPost } from "./ForumPost";
import { ForumCommentLike } from "./ForumCommentLike";
import { Model } from "sequelize-typescript";
export declare class ForumComment extends Model {
    id: string;
    authorId: string;
    forumPostId: string;
    rootCommentId: string;
    text: string;
    author: User;
    forumPost: ForumPost;
    rootComment: ForumComment;
    subComments: ForumComment[];
    commentLikes: ForumCommentLike[];
    medias: Media[];
    userLikes: User[];
}
