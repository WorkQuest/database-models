import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
import { FirstWqtTransmissionData } from "../transaction-features/first-wqt/FirstWqtTransmissionData";
export declare enum SwapUsdtEvents {
    SwapInitialized = "SwapInitialized"
}
export declare class BridgeSwapUsdtTokenEvent extends Model {
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
    bridgeEvent: FirstWqtTransmissionData;
}
