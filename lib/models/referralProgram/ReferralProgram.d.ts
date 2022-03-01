import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
export declare class ReferralProgram extends Model {
    id: string;
    referrerUserId: string;
    paidReward: number;
    claimReward: number;
    referralId: string;
    referrer: User;
}
