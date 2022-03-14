import { Model } from "sequelize-typescript";
import { User } from "../user/User";
import { BlockchainNetworks } from "../types";
export declare class WqtDelegateVotesChangedEvent extends Model {
    id: string;
    userId: string;
    transactionHash: string;
    delegateAddress: string;
    previousBalance: string;
    newBalance: string;
    blockNumber: number;
    timestamp: string;
    network: BlockchainNetworks;
    user: User;
}
