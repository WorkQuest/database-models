import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
export declare class ReferralProgramEventRegisteredAffiliate extends Model {
    blockNumber: number;
    transactionHash: string;
    referral: string;
    affiliate: string;
    timestamp: string;
    network: BlockchainNetworks;
}
