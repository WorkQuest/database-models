import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class ReferralEventPaidReferral extends Model {
    blockNumber: number;
    transactionHash: string;
    referral: string;
    affiliat: string;
    amount: string;
    timestamp: string;
    event: string;
    network: BlockchainNetworks;
}
