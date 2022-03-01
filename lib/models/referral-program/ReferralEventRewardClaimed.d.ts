import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class ReferralEventRewardClaimed extends Model {
    blockNumber: number;
    transactionHash: string;
    affiliate: string;
    amount: string;
    timestamp: string;
    network: BlockchainNetworks;
}
