import { Model } from "sequelize-typescript";
export declare class SwapParser extends Model {
    id: string;
    blockNumber: string;
    totalUSD: string;
    bnbAmountIn: string;
    bnbAmountOut: string;
    wqtAmountIn: string;
    wqtAmountOut: string;
    account: string;
    timestamp: string;
}
