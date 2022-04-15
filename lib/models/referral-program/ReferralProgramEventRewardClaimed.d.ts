import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class ReferralProgramEventRewardClaimed extends Model {
    blockNumber: number;
    transactionHash: string;
    affiliate: string;
    amount: string;
    timestamp: string;
    network: BlockchainNetworks;
}
