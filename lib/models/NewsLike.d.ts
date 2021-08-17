import { Model } from 'sequelize-typescript';
import { User } from "./User";
import { News } from "./News";
export declare class LikeNews extends Model {
    id: string;
    newsId: string;
    userId: string;
    news: News;
    user: User;
}
