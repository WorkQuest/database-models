import { Model } from "sequelize-typescript";
import { BlockchainNetworks } from "../types";
import { Wallet } from "../wallet/Wallet";
export declare class ProposalDelegateUserHistory extends Model {
    delegator: string;
    delegatee: string;
    timestamp: string;
    network: BlockchainNetworks;
    delegatorWallet: Wallet;
    delegateeWallet: Wallet;
}
