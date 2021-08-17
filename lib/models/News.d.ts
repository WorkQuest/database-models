import { Model } from "sequelize-typescript";
import { User } from "./User";
import { Comment } from "./Comment";
import { Media } from "./Media";
import { LikeNews } from "./NewsLike";
export declare class News extends Model {
    id: string;
    authorId: string;
    text: string;
    author: User;
    rootComments: Comment[];
    likes: LikeNews[];
    medias: Media[];
    userLikes: User[];
}
