import { Model } from 'sequelize-typescript';
import { User } from "./User";
import { Quest } from "./Quest";
export declare enum DisputeStatus {
    pending = "pending",
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
    user: User;
    assignedWorker: User;
    quest: Quest;
}
