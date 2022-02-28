import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { ReferrerAffiliateUser } from "./ReferrerAffiliateUser";
export declare class ReferralProgram extends Model {
    id: string;
    referrerUserId: string;
    amountReward: number;
    referralId: string;
    referrer: User;
    refId: ReferrerAffiliateUser;
}
