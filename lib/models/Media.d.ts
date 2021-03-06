import { Model } from 'sequelize-typescript';
import { User } from './user/User';
export declare enum ContentType {
    mp4 = "video/mp4",
    jpeg = "image/jpeg",
    png = "image/png",
    pdf = "application/pdf",
    DOC = "application/msword"
}
export declare class Media extends Model {
    id: string;
    userId: string;
    adminId: string;
    contentType: ContentType;
    url: string;
    hash: string;
    user: User;
}
