import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { ReferralProgramAffiliate } from "./ReferralProgramAffiliate";
export declare class ReferralProgram extends Model {
    id: string;
    referrerUserId: string;
    paidReward: string;
    claimReward: string;
    referralId: string;
    referrer: User;
    affiliates: ReferralProgramAffiliate[];
}
