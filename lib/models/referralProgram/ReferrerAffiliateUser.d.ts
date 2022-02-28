import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { ReferralProgram } from "./ReferralProgram";
export declare enum AffiliateStatus {
    Created = "created",
    Registered = "registered",
    Claimed = "claimed",
    Paid = "paid"
}
export declare class ReferrerAffiliateUser extends Model {
    id: string;
    affiliateUserId: string;
    referralId: string;
    status: AffiliateStatus;
    user: User;
    refId: ReferralProgram;
}
