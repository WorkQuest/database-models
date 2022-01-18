import { Model } from "sequelize-typescript";
export declare class WqtWbnbSwapEvent extends Model {
    blockNumber: number;
    totalUSD: string;
    bnbAmountIn: string;
    bnbAmountOut: string;
    wqtAmountIn: string;
    wqtAmountOut: string;
    account: string;
    timestamp: string;
}
