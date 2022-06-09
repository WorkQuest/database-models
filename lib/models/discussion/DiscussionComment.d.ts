import { Media } from "../Media";
import { User } from "../user/User";
import { Discussion } from "./Discussion";
import { DiscussionCommentLike } from "./DiscussionCommentLike";
import { Model } from "sequelize-typescript";
export declare enum DiscussionCommentStatus {
    Blocked = -1,
    Created = 0
}
export declare class DiscussionComment extends Model {
    id: string;
    authorId: string;
    discussionId: string;
    rootCommentId: string;
    text: string;
    amountLikes: number;
    amountSubComments: number;
    level: number;
    status: DiscussionCommentStatus;
    author: User;
    discussion: Discussion;
    rootComment: DiscussionComment;
    subComments: DiscussionComment[];
    commentLikes: DiscussionCommentLike[];
    medias: Media[];
    userLikes: User[];
}
