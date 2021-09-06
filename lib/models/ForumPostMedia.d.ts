import { Model } from "sequelize-typescript";
import { Media } from "./Media";
import { ForumPost } from "./ForumPost";
export declare class ForumPostMedia extends Model {
    id: string;
    mediaId: string;
    forumPostId: string;
    media: Media;
    postId: ForumPost;
}
