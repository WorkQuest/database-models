import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class PensionFundReceivedEvent extends Model {
    blockNumber: number;
    transactionHash: string;
    user: string;
    amount: string;
    timestamp: string;
    network: BlockchainNetworks;
}
