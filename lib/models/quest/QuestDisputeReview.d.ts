import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { Admin } from '../admin/Admin';
import { QuestDispute } from "./QuestDispute";
export declare class QuestDisputeReview extends Model {
    id: string;
    disputeId: string;
    fromUserId: string;
    toAdminId: string;
    message: string;
    mark: number;
    fromUser: User;
    toAdmin: Admin;
    dispute: QuestDispute;
    avgMark: number;
}
