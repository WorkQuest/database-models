import { Model } from "sequelize-typescript";
import { User } from "../user/User";
import { BlockchainNetworks } from "../types";
export declare class WqtDelegateVotesChangedEvent extends Model {
    id: string;
    delegatorUserId: string;
    delegateUserId: string;
    transactionHash: string;
    delegator: string;
    delegate: string;
    previousBalance: string;
    newBalance: string;
    blockNumber: number;
    timestamp: string;
    network: BlockchainNetworks;
    delegatorUser: User;
    delegateUser: User;
}
