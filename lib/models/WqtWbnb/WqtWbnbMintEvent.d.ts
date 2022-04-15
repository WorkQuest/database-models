import { Model } from "sequelize-typescript";
export declare class WqtWbnbMintEvent extends Model {
    blockNumber: number;
    amount0: string;
    amount1: string;
    sender: string;
    timestamp: string;
    transactionHash: string;
}
