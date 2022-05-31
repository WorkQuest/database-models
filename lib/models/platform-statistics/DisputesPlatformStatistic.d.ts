import { Model } from "sequelize-typescript";
export declare class DisputesPlatformStatistic extends Model {
    total: number;
    pending: number;
    created: number;
    inProgress: number;
    acceptedWork: number;
    date: Date;
}
