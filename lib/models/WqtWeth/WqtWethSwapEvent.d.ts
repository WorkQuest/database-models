import { Model } from "sequelize-typescript";
export declare class WqtWethSwapEvent extends Model {
    blockNumber: number;
    amountUSD: string;
    amount0In: string;
    amount0Out: string;
    amount1In: string;
    to: string;
    timestamp: string;
    amount1Out: string;
    transactionHash: string;
}
