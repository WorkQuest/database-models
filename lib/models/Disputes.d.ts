import { Model } from 'sequelize-typescript';
import { User } from "./User";
import { Quest } from "./Quest";
export declare enum DisputeStatus {
    active = "active",
    resolved = "resolved"
}
export declare const DisputeStatuses: DisputeStatus[];
export declare class Disputes extends Model {
    id: string;
    employerId: string;
    workerId: string;
    questId: string;
    status: DisputeStatus;
    problem: string;
    decision: string;
    employer: User;
    worker: User;
    quest: Quest;
}
