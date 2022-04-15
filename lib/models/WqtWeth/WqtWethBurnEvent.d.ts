import { Model } from "sequelize-typescript";
export declare class WqtWethBurnEvent extends Model {
    blockNumber: number;
    amount0: string;
    amount1: string;
    sender: string;
    to: string;
    timestamp: string;
    transactionHash: string;
}
