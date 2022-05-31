import { User } from '../user/User';
import { Admin } from '../admin/Admin';
import { Model } from 'sequelize-typescript';
export declare enum SupportStatus {
    Rejected = -1,
    Pending = 0,
    Decided = 1
}
export declare enum AdminSupportResolved {
    Pending = "Pending",
    AnsweredByMail = "AnsweredByMail",
    RepliedToPrivateMessages = "RepliedToPrivateMessages",
    Decided = "Decided"
}
export declare class SupportUser extends Model {
    id: string;
    supportTicket: number;
    authorUserId: string;
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
