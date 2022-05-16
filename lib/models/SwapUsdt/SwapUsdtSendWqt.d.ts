import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class SwapUsdtSwapWqt extends Model {
    txHash: string;
    txHashSwapInitialized: string;
    userId: string;
    blockNumber: number;
    ratio: number;
    network: BlockchainNetworks;
    amount: string;
    gasUsed: string;
}
