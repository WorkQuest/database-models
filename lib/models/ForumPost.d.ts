import { Model } from "sequelize-typescript";
import { User } from "./User";
import { ForumPostComment } from "./ForumPostComment";
import { Media } from "./Media";
import { ForumPostLike } from "./ForumPostLike";
export declare class ForumPost extends Model {
    id: string;
    authorId: string;
    text: string;
    author: User;
    rootComments: ForumPostComment[];
    likes: ForumPostLike[];
    medias: Media[];
    userLikes: User[];
}
