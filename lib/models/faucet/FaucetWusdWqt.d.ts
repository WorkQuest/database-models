import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class FaucetWusdWqt extends Model {
    userId: string;
    address: string;
    amount: string;
    symbol: string;
    blockNumber: number;
    transactionHash: string;
    network: BlockchainNetworks;
}
