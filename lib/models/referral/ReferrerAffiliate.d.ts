import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { AffiliateStatus } from "../types";
import { Referral } from "./Referral";
export declare class ReferrerAffiliate extends Model {
    id: string;
    affiliateId: string;
    userReferral: string;
    affiliateStatus: AffiliateStatus;
    user: User;
    referralId: Referral;
}
