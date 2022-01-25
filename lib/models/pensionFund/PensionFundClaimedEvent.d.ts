import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class PensionFundClaimedEvent extends Model {
    blockNumber: number;
    transactionHash: string;
    user: string;
    amount: string;
    timestamp: string;
    network: BlockchainNetworks;
}
