import { Model } from 'sequelize-typescript';
import { DiscussionComment, DiscussionCommentStatus } from "../discussion/DiscussionComment";
import { Quest, QuestStatus } from "../quest/Quest";
import { User, UserStatus } from '../user/User';
import { Admin } from '../admin/Admin';
import { Media } from "../Media";
export declare enum ReportStatus {
    Rejected = -1,
    Created = 0,
    Decided = 1
}
export declare enum ReportEntityType {
    User = "User",
    Quest = "Quest",
    DiscussionComment = "DiscussionComment"
}
export declare const reportEntities: {
    User: {
        entity: typeof User;
        statuses: typeof UserStatus;
    };
    Quest: {
        entity: typeof Quest;
        statuses: typeof QuestStatus;
    };
    DiscussionComment: {
        entity: typeof DiscussionComment;
        statuses: typeof DiscussionCommentStatus;
    };
};
export declare class Report extends Model {
    id: string;
    authorId: string;
    resolvedByAdminId: string;
    title: string;
    description: string;
    status: ReportStatus;
    number: number;
    entityType: ReportEntityType;
    entityId: string;
    resolvedAt: Date;
    user: User;
    admin: Admin;
    entityUser: User;
    entityQuest: Quest;
    entityComment: DiscussionComment;
    medias: Media[];
}
