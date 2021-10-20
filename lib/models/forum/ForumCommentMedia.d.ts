import { Media } from "../Media";
import { ForumComment } from "./ForumComment";
import { Model } from "sequelize-typescript";
export declare class ForumCommentMedia extends Model {
    id: string;
    mediaId: string;
    commentId: string;
    media: Media;
    comment: ForumComment;
}
