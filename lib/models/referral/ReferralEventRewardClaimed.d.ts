import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class ReferralEventRewardClaimed extends Model {
    blockNumber: number;
    transactionHash: string;
    affiliat: string;
    amount: string;
    timestamp: string;
    event: string;
    network: BlockchainNetworks;
}
