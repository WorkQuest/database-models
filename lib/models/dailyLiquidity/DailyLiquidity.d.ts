import { Model } from "sequelize-typescript";
export declare class DailyLiquidity extends Model {
    id: string;
    timestamp: string;
    blockNumber: string;
    bnbPool: string;
    wqtPool: string;
    usdPriceBNB: string;
    usdPriceWQT: string;
    liquidityPoolUSD: string;
}
