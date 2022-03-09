import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { ReferralProgramReferrals } from "./ReferralProgramReferral";
export declare class ReferralProgramAffiliates extends Model {
    id: string;
    affiliateUserId: string;
    paidReward: string;
    claimReward: string;
    referralCodeId: string;
    affiliate: User;
    referrals: ReferralProgramReferrals[];
}
