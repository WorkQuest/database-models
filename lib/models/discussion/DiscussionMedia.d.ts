import { Model } from "sequelize-typescript";
import { Media } from "../Media";
import { Discussion } from "./Discussion";
export declare class DiscussionMedia extends Model {
    id: string;
    mediaId: string;
    discussionId: string;
    media: Media;
    discussion: Discussion;
}
