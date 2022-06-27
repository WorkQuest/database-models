import { Model } from "sequelize-typescript";
export declare class QuestsPlatformStatistic extends Model {
    total: number;
    sum: string;
    closed: number;
    dispute: number;
    blocked: number;
    pending: number;
    recruitment: number;
    waitingForConfirmFromWorkerOnAssign: number;
    executionOfWork: number;
    waitingForEmployerConfirmationWork: number;
    completed: number;
    date: Date;
}
