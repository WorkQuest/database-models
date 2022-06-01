import { TransactionStatus } from "../types";
import { Model } from "sequelize-typescript";
export declare enum QuestDisputeDecision {
    Rework = "Rework",
    AcceptWork = "AcceptWork",
    RejectWork = "RejectWork"
}
export declare class QuestDisputeDecisionData extends Model {
    disputeId: string;
    transactionHashDisputeResolution: string;
    decision: QuestDisputeDecision;
    gasPriceAtMoment: string;
    status: TransactionStatus;
    error: string;
}