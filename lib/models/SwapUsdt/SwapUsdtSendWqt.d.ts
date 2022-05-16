import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare enum swapUsdtStatus {
    SwapCreated = "SwapCreated",
    SwapActive = "SwapActive",
    SwapProcessed = "SwapProcessed",
    SwapCompleted = "SwapCompleted",
    SwapError = "SwapError"
}
export declare class SwapUsdtSendWqt extends Model {
    txHash: string;
    txHashSwapInitialized: string;
    userId: string;
    blockNumber: number;
    ratio: number;
    network: BlockchainNetworks;
    status: swapUsdtStatus;
    amount: string;
    gasUsed: string;
}
