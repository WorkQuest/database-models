import { Model } from 'sequelize-typescript';
import { Admin } from '../admin/Admin';
import { User } from '../user/User';
import { Media } from "../Media";
export declare enum ReportStatus {
    Rejected = -1,
    Created = 0,
    Decided = 1
}
export declare enum ReportEntityType {
    User = "User",
    Quest = "Quest",
    Comment = "Comment"
}
export declare class Report extends Model {
    id: string;
    authorId: string;
    resolvedByAdminId: string;
    title: string;
    description: string;
    status: ReportStatus;
    entityType: ReportEntityType;
    entityId: string;
    resolvedAt: Date;
    user: User;
    admin: Admin;
    medias: Media[];
}
