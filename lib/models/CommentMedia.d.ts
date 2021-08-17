import { Model } from "sequelize-typescript";
import { Media } from "./Media";
import { Comment } from "./Comment";
export declare class CommentMedia extends Model {
    id: string;
    mediaId: string;
    commentId: string;
    media: Media;
    comment: Comment;
}
