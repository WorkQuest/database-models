import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { AffiliateStatus } from "../types";
import { Media } from "../Media";
export declare class ReferrerAffiliate extends Model {
    id: string;
    affiliateId: string;
    userReferral: string;
    workplace: AffiliateStatus;
    user: User;
    medias: Media[];
}
