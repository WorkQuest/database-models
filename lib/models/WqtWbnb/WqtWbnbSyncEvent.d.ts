import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class WqtWbnbSyncEvent extends Model {
    blockNumber: number;
    reserve0: string;
    reserve1: string;
    timestamp: string;
    transactionHash: string;
    network: BlockchainNetworks;
}
