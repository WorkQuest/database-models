import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class WqtWbnbMintEvent extends Model {
    blockNumber: number;
    amount0: string;
    amount1: string;
    sender: string;
    timestamp: string;
    transactionHash: string;
    network: BlockchainNetworks;
}
