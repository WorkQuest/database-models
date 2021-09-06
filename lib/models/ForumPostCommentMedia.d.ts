import { Model } from "sequelize-typescript";
import { Media } from "./Media";
import { ForumPostComment } from "./ForumPostComment";
export declare class ForumPostCommentMedia extends Model {
    id: string;
    mediaId: string;
    forumPostCommentId: string;
    media: Media;
    comment: ForumPostComment;
}
