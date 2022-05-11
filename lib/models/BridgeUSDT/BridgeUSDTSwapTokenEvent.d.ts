import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare enum SwapEventsUSDT {
    swapInitialized = "SwapInitialized"
}
export declare class BridgeUSDTSwapTokenEvent extends Model {
    transactionHash: string;
    userId: string;
    blockNumber: number;
    network: BlockchainNetworks;
    event: SwapEventsUSDT;
    nonce: number;
    timestamp: string;
    recipient: string;
    amount: string;
    chainTo: number;
    chainFrom: number;
    symbol: string;
}
