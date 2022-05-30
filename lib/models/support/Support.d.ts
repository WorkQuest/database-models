import { User } from '../user/User';
import { Admin } from '../admin/Admin';
import { Model } from 'sequelize-typescript';
export declare enum SupportStatus {
    Rejected = -1,
    Created = 0,
    Waiting = 1,
    Decided = 2
}
export declare enum AdminSupportResolved {
    Waiting = "Waiting",
    AnsweredByMail = "AnsweredByMail",
    RepliedToPrivateMessages = "RepliedToPrivateMessages",
    Decided = "Decided"
}
export declare class Support extends Model {
    id: string;
    supportTicket: number;
    authorId: string;
    resolvedByAdminId: string;
    email: string;
    title: string;
    description: string;
    status: SupportStatus;
    decision: AdminSupportResolved;
    completionAt: Date;
    user: User;
    admin: Admin;
}
