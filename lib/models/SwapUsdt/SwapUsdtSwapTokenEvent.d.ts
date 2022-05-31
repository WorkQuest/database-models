import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
import { SwapUsdtEvents } from "./types";
export declare class SwapUsdtSwapTokenEvent extends Model {
    transactionHash: string;
    userId: string;
    blockNumber: number;
    network: BlockchainNetworks;
    event: SwapUsdtEvents;
    nonce: number;
    timestamp: string;
    recipient: string;
    amount: string;
    chainTo: number;
    chainFrom: number;
    symbol: string;
}
