import { Model } from 'sequelize-typescript';
import { SwapUsdtSwapTokenEvent } from "./SwapUsdtSwapTokenEvent";
import { BlockchainNetworks } from "../types";
import { swapUsdtStatus } from "./types";
export declare class SwapUsdtSendWqt extends Model {
    transactionHash: string;
    txHashSwapInitialized: string;
    userId: string;
    blockNumber: number;
    ratio: number;
    network: BlockchainNetworks;
    status: swapUsdtStatus;
    statusMessage: string;
    amount: string;
    gasUsed: string;
    txHashSwap: SwapUsdtSwapTokenEvent;
}
