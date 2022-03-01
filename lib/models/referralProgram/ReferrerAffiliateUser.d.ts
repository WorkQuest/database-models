import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
export declare enum ReferralStatus {
    Created = "created",
    Registered = "registered"
}
export declare enum RewardStatus {
    Paid = "paid",
    Claimed = "claimed"
}
export declare class ReferrerAffiliateUser extends Model {
    id: string;
    affiliateUserId: string;
    referralId: string;
    referralStatus: ReferralStatus;
    rewardStatus: RewardStatus;
    user: User;
}
