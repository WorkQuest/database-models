import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
import { Wallet } from "../wallet/Wallet";
export declare class ProposalDelegateChangedEvent extends Model {
    blockNumber: number;
    transactionHash: string;
    delegator: string;
    fromDelegate: string;
    toDelegate: string;
    timestamp: string;
    network: BlockchainNetworks;
    delegatorWallet: Wallet;
    fromDelegateWallet: Wallet;
    toDelegateWallet: Wallet;
}
