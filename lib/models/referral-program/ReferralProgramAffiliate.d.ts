import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { ReferralProgramReferral } from "./ReferralProgramReferral";
export declare class ReferralProgramAffiliate extends Model {
    id: string;
    affiliateUserId: string;
    paidReward: string;
    referralCodeId: string;
    affiliateUser: User;
    affiliate: ReferralProgramReferral[];
    affiliateClaimedEvents: ReferralProgramReferral[];
}
