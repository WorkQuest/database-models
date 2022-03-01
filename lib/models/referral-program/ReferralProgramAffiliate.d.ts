import { User } from '../user/User';
import { ReferralProgram } from "./ReferralProgram";
import { Model } from 'sequelize-typescript';
export declare enum ReferralStatus {
    Created = "created",
    Registered = "registered"
}
export declare enum RewardStatus {
    Paid = "paid",
    Claimed = "claimed"
}
export declare class ReferralProgramAffiliate extends Model {
    id: string;
    affiliateUserId: string;
    referralId: string;
    referralStatus: ReferralStatus;
    rewardStatus: RewardStatus;
    user: User;
    referral: ReferralProgram;
}
