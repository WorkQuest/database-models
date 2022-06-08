import { Model } from "sequelize-typescript";
export declare class DaoPlatformStatistic extends Model {
    votes: number;
    delegatedValue: string;
    votesFor: number;
    votesAgain: number;
    date: Date;
}
