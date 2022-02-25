import { Model } from "sequelize-typescript";
export declare class DailyLiquidity extends Model {
    id: string;
    date: string;
    blockNumber: string;
    bnbPool: string;
    wqtPool: string;
    usdPriceBNB: string;
    usdPriceWQT: string;
    reserveUSD: string;
}
