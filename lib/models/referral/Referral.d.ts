import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
export declare class Referral extends Model {
    id: string;
    userId: string;
    amountReward: number;
    referralId: string;
    referrer: User;
}
