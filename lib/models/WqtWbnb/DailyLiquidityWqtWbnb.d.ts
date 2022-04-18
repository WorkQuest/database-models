import { Model } from "sequelize-typescript";
export declare class DailyLiquidityWqtWbnb extends Model {
    daySinceEpochBeginning: string;
    date: string;
    blockNumber: string;
    bnbPool: string;
    wqtPool: string;
    usdPriceBNB: string;
    usdPriceWQT: string;
    reserveUSD: string;
}
