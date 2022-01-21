import { Model } from 'sequelize-typescript';
import { User } from "../user/User";
import { Quest, QuestStatus } from "./Quest";
import { Admin } from "../admin/Admin";
export declare enum DisputeStatus {
    pending = 0,
    inProgress = 1,
    closed = 2
}
export declare enum DisputeReason {
    noAnswer = "noAnswer",
    poorlyDoneJob = "poorlyDoneJob",
    additionalRequirement = "additionalRequirement",
    requirementDoesNotMatch = "requirementDoesNotMatch",
    noConfirmationOfComplete = "noConfirmationOfComplete",
    anotherReason = "anotherReason"
}
export declare class QuestDispute extends Model {
    id: string;
    questId: string;
    openDisputeUserId: string;
    opponentUserId: string;
    assignedAdminId: string;
    disputeNumber: number;
    openOnQuestStatus: QuestStatus;
    status: DisputeStatus;
    reason: DisputeReason;
    problemDescription: string;
    decisionDescription: string;
    resolvedAt: Date;
    openDisputeUser: User;
    opponentUser: User;
    assignedAdmin: Admin;
    quest: Quest;
}
