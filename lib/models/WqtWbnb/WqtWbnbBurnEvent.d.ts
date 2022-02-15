import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class WqtWbnbBurnEvent extends Model {
    blockNumber: number;
    amount0: string;
    amount1: string;
    sender: string;
    to: string;
    timestamp: string;
    transactionHash: string;
    network: BlockchainNetworks;
}
