import { Media } from "../Media";
import { DiscussionComment } from "./DiscussionComment";
import { Model } from "sequelize-typescript";
export declare class DiscussionCommentMedia extends Model {
    id: string;
    mediaId: string;
    commentId: string;
    media: Media;
    comment: DiscussionComment;
}
