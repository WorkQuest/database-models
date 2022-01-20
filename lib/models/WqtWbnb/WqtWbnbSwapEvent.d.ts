import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class WqtWbnbSwapEvent extends Model {
    blockNumber: number;
    totalUSD: string;
    amount0In: string;
    amount0Out: string;
    amount1In: string;
    to: string;
    timestamp: string;
    amount1Out: string;
    transactionHash: string;
    network: BlockchainNetworks;
}
