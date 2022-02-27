import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class ReferralEventPaidReferral extends Model {
    blockNumber: number;
    transactionHash: string;
    referral: string;
    affiliate: string;
    amount: string;
    timestamp: string;
    network: BlockchainNetworks;
}
