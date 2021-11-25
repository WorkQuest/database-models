import { Model } from "sequelize-typescript";
export declare class DailyLiquidity extends Model {
    id: string;
    timestamp: Date;
    blockNumber: string;
    bnbPool: string;
    wqtPool: string;
    usdPriceBNB: string;
    usdPriceWQT: string;
    liquidityPoolUSD: string;
}
