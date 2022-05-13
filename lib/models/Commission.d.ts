import { Model } from 'sequelize-typescript';
export declare enum CommissionTitle {
    CommissionSwapWQT = "CommissionSwapWQT"
}
export declare enum CommissionCurrency {
    WQT = "WQT",
    ETH = "ETH",
    BNB = "BNB",
    USDT = "USDT",
    Percent = "%"
}
export interface CommissionList {
    title: CommissionTitle;
    currency: CommissionCurrency;
    value: number | null;
}
export declare class Commission extends Model {
    commission: CommissionList;
}
