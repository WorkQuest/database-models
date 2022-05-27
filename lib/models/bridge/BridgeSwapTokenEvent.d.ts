import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare enum SwapEvents {
    swapRedeemed = "SwapRedeemed",
    swapInitialized = "SwapInitialized"
}
export declare class BridgeSwapTokenEvent extends Model {
    transactionHash: string;
    blockNumber: number;
    network: BlockchainNetworks;
    event: SwapEvents;
    messageHash: string;
    nonce: number;
    timestamp: string;
    initiator: string;
    recipient: string;
    amount: string;
    chainTo: number;
    chainFrom: number;
    symbol: string;
}
