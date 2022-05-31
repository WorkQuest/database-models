import { Model } from "sequelize-typescript";
export declare class DaoPlatformStatistic extends Model {
    votes: number;
    delegatedValue: string;
    votesForPercent: number;
    votesAgainPercent: number;
    date: Date;
}
