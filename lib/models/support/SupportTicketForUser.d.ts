import { User } from '../user/User';
import { Admin } from '../admin/Admin';
import { Model } from 'sequelize-typescript';
export declare enum TicketStatus {
    Rejected = -1,
    Pending = 0,
    Decided = 1
}
export declare enum TicketDecision {
    Pending = "Pending",
    AnsweredByMail = "AnsweredByMail",
    RepliedToPrivateMessages = "RepliedToPrivateMessages",
    Decided = "Decided"
}
export declare class SupportTicketForUser extends Model {
    id: string;
    number: number;
    authorUserId: string;
    resolvedByAdminId: string;
    replyToMail: string;
    title: string;
    description: string;
    status: TicketStatus;
    decision: TicketDecision;
    completionAt: Date;
    authorUser: User;
    resolvedByAdmin: Admin;
}
