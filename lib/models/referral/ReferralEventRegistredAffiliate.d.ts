import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class ReferralEventRegistredAffiliate extends Model {
    blockNumber: number;
    transactionHash: string;
    referral: string;
    affiliat: string;
    timestamp: string;
    event: string;
    network: BlockchainNetworks;
}