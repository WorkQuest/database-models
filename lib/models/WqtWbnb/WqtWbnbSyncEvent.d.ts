import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class WqtWbnbSyncEvent extends Model {
    blockNumber: number;
    reserveBNB: string;
    reserveWQT: string;
    priceBNB: string;
    priceWQT: string;
    timestamp: string;
    transactionHash: string;
    network: BlockchainNetworks;
}
