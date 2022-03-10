import { Model } from 'sequelize-typescript';
import { BlockchainNetworks } from "../types";
import { ReferralProgramAffiliate } from "./ReferralProgramAffiliate";
export declare class ReferralEventRewardClaimed extends Model {
    blockNumber: number;
    transactionHash: string;
    affiliate: string;
    amount: string;
    timestamp: string;
    network: BlockchainNetworks;
    referralProgramAffiliateEvent: ReferralProgramAffiliate;
}
