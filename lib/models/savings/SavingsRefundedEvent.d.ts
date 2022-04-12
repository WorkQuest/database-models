import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class SavingsRefundedEvent extends Model {
    blockNumber: number;
    transactionHash: string;
    user: string;
    amount: string;
    timestamp: string;
    event: string;
    network: BlockchainNetworks;
}
