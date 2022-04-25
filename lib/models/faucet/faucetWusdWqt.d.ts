import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare enum FaucetAmount {
    WUSD = "1000000000000000000000",
    WQT = "100000000000000000000"
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
