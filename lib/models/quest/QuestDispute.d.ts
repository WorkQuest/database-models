import { Model } from 'sequelize-typescript';
import { User } from "../user/User";
import { Quest, QuestStatus } from "./Quest";
import { Admin } from "../admin/Admin";
export declare enum DisputeStatus {
    Pending = 0,
    Created = 1,
    InProgress = 2,
    Closed = 3
}
export declare enum DisputeReason {
    NoAnswer = "noAnswer",
    PoorlyDoneJob = "poorlyDoneJob",
    AdditionalRequirement = "additionalRequirement",
    RequirementDoesNotMatch = "requirementDoesNotMatch",
    NoConfirmationOfComplete = "noConfirmationOfComplete",
    AnotherReason = "anotherReason"
}
export declare enum DisputeDecision {
    AcceptWork = 0,
    RejectWork = 1,
    Rework = 2
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
    decision: DisputeDecision;
    acceptedAt: Date;
    resolvedAt: Date;
    openDisputeUser: User;
    opponentUser: User;
    assignedAdmin: Admin;
    quest: Quest;
}
