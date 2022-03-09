import { User } from '../user/User';
import { ReferralProgramAffiliate } from "./ReferralProgramAffiliate";
import { Model } from 'sequelize-typescript';
export declare enum ReferralStatus {
    Created = "created",
    Registered = "registered"
}
export declare enum RewardStatus {
    Paid = "paid",
    Claimed = "claimed"
}
export declare class ReferralProgramReferral extends Model {
    id: string;
    referralUserId: string;
    referralProgramId: string;
    referralStatus: ReferralStatus;
    rewardStatus: RewardStatus;
    user: User;
    referralProgram: ReferralProgramAffiliate;
}
