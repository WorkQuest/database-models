import { Model } from "sequelize-typescript";
export declare class WqtWbnbSwapEven extends Model {
    blockNumber: string;
    totalUSD: string;
    bnbAmountIn: string;
    bnbAmountOut: string;
    wqtAmountIn: string;
    wqtAmountOut: string;
    account: string;
    timestamp: string;
}
