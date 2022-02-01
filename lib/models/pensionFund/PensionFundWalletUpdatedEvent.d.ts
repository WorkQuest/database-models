import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
export declare class PensionFundWalletUpdatedEvent extends Model {
    blockNumber: number;
    transactionHash: string;
    user: string;
    newFee: string;
    unlockDate: string;
    timestamp: string;
    event: string;
    network: BlockchainNetworks;
}
