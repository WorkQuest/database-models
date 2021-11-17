import { Model } from 'sequelize-typescript';
import { User } from "../user/User";
import { Quest } from "./Quest";
import { Admin } from "../admin/Admin";
export declare enum DisputeStatus {
    pending = 0,
    inProgress = 1,
    completed = 2
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
    disputeNumber: number;
    openDisputeUserId: string;
    opponentUserId: string;
    resolvedByAdminId: string;
    questId: string;
    status: DisputeStatus;
    reason: DisputeReason;
    problem: string;
    decision: string;
    resolveAt: Date;
    openDisputeUser: User;
    opponentUser: User;
    resolvedByAdmin: Admin;
    quest: Quest;
    mustHaveStatus(status: DisputeStatus): void;
}
