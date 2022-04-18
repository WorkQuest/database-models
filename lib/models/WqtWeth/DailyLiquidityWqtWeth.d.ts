import { Model } from "sequelize-typescript";
export declare class DailyLiquidityWqtWeth extends Model {
    daySinceEpochBeginning: string;
    date: string;
    blockNumber: string;
    ethPool: string;
    wqtPool: string;
    usdPriceETH: string;
    usdPriceWQT: string;
    reserveUSD: string;
}
