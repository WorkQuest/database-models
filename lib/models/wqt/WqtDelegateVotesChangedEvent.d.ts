import { Model } from "sequelize-typescript";
import { User } from "../user/User";
import { BlockchainNetworks } from "../types";
export declare class WqtDelegateVotesChangedEvent extends Model {
    id: string;
    delegatorUserId: string;
    delegateeUserId: string;
    transactionHash: string;
    delegatorAddress: string;
    delegateeAddress: string;
    previousBalance: string;
    newBalance: string;
    blockNumber: number;
    timestamp: string;
    network: BlockchainNetworks;
    delegatorUser: User;
    delegateeUser: User;
}
