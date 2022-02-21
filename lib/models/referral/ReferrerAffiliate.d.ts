import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { AffiliateStatus } from "../types";
export declare class ReferrerAffiliate extends Model {
    id: string;
    affiliateId: string;
    userReferral: string;
    status: AffiliateStatus;
    user: User;
}
