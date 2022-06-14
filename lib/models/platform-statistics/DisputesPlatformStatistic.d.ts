import { Model } from "sequelize-typescript";
export declare class DisputesPlatformStatistic extends Model {
    total: number;
    pending: number;
    created: number;
    inProgress: number;
    pendingClosed: number;
    closed: number;
    date: Date;
}
