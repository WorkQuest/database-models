import { Model } from "sequelize-typescript";
export declare class WqtWethSyncEvent extends Model {
    blockNumber: number;
    reserve0: string;
    reserve1: string;
    timestamp: string;
    transactionHash: string;
}
