import { Model } from 'sequelize-typescript';
import { User } from './User';
export declare enum ContentType {
    mp4 = "video/mp4",
    jpeg = "image/jpeg",
    png = "image/png"
}
export declare class Media extends Model {
    id: string;
    userId: string;
    contentType: ContentType;
    url: string;
    hash: string;
    user: User;
}
