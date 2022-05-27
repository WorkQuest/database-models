import { Model } from 'sequelize-typescript';
import { Admin } from '../admin/Admin';
import { User } from '../user/User';
export declare enum SupportStatus {
    Rejected = -1,
    Created = 0,
    Waiting = 1,
    Decided = 2
}
export declare enum AdminSupportResolved {
    Expected = "Expected",
    AnsweredByMail = "AnsweredByMail",
    RepliedToPrivateMessages = "RepliedToPrivateMessages",
    Decided = "Decided"
}
export declare class Support extends Model {
    id: string;
    supportTicket: number;
    supportAuthor: string;
    resolvedByAdminId: string;
    email: string;
    title: string;
    description: string;
    status: SupportStatus;
    resolvedStatus: AdminSupportResolved;
    completionAt: Date;
    user: User;
    admin: Admin;
}
