import { Media } from "../Media";
import { User } from "../user/User";
import { Discussion } from "./Discussion";
import { DiscussionCommentLike } from "./DiscussionCommentLike";
import { Model } from "sequelize-typescript";
export declare class DiscussionComment extends Model {
    id: string;
    authorId: string;
    discussionId: string;
    rootCommentId: string;
    text: string;
    amountLikes: number;
    amountSubComments: number;
    author: User;
    discussion: Discussion;
    rootComment: DiscussionComment;
    subComments: DiscussionComment[];
    commentLikes: DiscussionCommentLike[];
    medias: Media[];
    userLikes: User[];
}
