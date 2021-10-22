import { Media } from "../Media";
import { User } from "../user/User";
import { DiscussionComment } from "./DiscussionComment";
import { DiscussionLike } from "./DiscussionLike";
import { Model } from "sequelize-typescript";
export declare class Discussion extends Model {
    id: string;
    authorId: string;
    title: string;
    description: string;
    amountLikes: number;
    amountComments: number;
    author: User;
    comments: DiscussionComment[];
    likes: DiscussionLike[];
    medias: Media[];
    userLikes: User[];
}
