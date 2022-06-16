import { Model } from 'sequelize-typescript';
import { User } from "../user/User";
import { Quest, QuestStatus } from "./Quest";
import { Admin } from "../admin/Admin";
import { QuestDisputeReview } from "./QuestDisputeReview";
export declare enum DisputeStatus {
    Pending = 0,
    Created = 1,
    InProgress = 2,
    PendingClosed = 3,
    Closed = 4
}
export declare enum DisputeReason {
    NoAnswer = "NoAnswer",
    AnotherReason = "AnotherReason",
    PoorlyDoneJob = "PoorlyDoneJob",
    AdditionalRequirement = "AdditionalRequirement",
    RequirementDoesNotMatch = "RequirementDoesNotMatch",
    NoConfirmationOfComplete = "NoConfirmationOfComplete"
}
export declare enum DisputeDecision {
    Rework = "Rework",
    AcceptWork = "AcceptWork",
    RejectWork = "RejectWork"
}
export declare class QuestDispute extends Model {
    id: string;
    questId: string;
    openDisputeUserId: string;
    opponentUserId: string;
    assignedAdminId: string;
    number: number;
    openOnQuestStatus: QuestStatus;
    status: DisputeStatus;
    reason: DisputeReason;
    problemDescription: string;
    decisionDescription: string;
    decision: DisputeDecision;
    acceptedAt: Date;
    resolvedAt: Date;
    questDisputeReview: QuestDisputeReview[];
    openDisputeUser: User;
    opponentUser: User;
    assignedAdmin: Admin;
    quest: Quest;
}
