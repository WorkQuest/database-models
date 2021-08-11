import { Model } from 'sequelize-typescript';
import { User } from "./User";
import { Quest } from "./Quest";
export declare enum DisputeStatus {
    pending = "pending",
    in_queue = "in_queue",
    completed = "completed"
}
export declare const DisputeStatuses: DisputeStatus[];
export declare class Disputes extends Model {
    id: string;
    userId: string;
    assignedWorkerId: string;
    questId: string;
    status: DisputeStatus;
    problem: string;
    decision: string;
    disputeOpeningTime: Date;
    user: User;
    assignedWorker: User;
    quest: Quest;
    mustHaveStatus(status: DisputeStatus): void;
}
