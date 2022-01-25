import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class PensionFundWithdrewEvent extends Model {
    blockNumber: number;
    transactionHash: string;
    user: string;
    amount: string;
    timestamp: string;
    network: BlockchainNetworks;
}
