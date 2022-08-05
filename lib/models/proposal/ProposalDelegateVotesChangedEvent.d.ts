import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
import { Wallet } from "../wallet/Wallet";
export declare class ProposalDelegateVotesChangedEvent extends Model {
    blockNumber: number;
    transactionHash: string;
    delegator: string;
    delegatee: string;
    previousBalance: string;
    newBalance: string;
    timestamp: string;
    network: BlockchainNetworks;
    delegatorWallet: Wallet;
    delegateeWallet: Wallet;
}
