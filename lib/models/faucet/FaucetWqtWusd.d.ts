import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare enum FaucetAmount {
    WQT = "100",
    WUSD = "1000"
}
export declare class FaucetWusdWqt extends Model {
    userId: string;
    address: string;
    amount: string;
    symbol: string;
    blockNumber: number;
    transactionHash: string;
    network: BlockchainNetworks;
}
