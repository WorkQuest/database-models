import { Media } from "../Media";
import { User } from "../user/User";
import { ForumComment } from "./ForumComment";
import { ForumPostLike } from "./ForumPostLike";
import { Model } from "sequelize-typescript";
export declare class ForumPost extends Model {
    id: string;
    authorId: string;
    text: string;
    author: User;
    rootComments: ForumComment[];
    likes: ForumPostLike[];
    medias: Media[];
    userLikes: User[];
}
