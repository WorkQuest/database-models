import { Model } from "sequelize-typescript";
import { Media } from "./Media";
import { News } from "./News";
export declare class NewsMedia extends Model {
    id: string;
    mediaId: string;
    newsId: string;
    media: Media;
    news: News;
}
