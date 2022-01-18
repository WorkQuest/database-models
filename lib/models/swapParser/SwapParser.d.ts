import { Model } from "sequelize-typescript";
export declare class SwapParser extends Model {
    id: string;
    blockNumber: string;
    totalUSD: string;
    bnbAmount: string;
    wqtAmount: string;
    account: string;
    timestamp: string;
}
