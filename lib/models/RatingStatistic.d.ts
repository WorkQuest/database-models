import { Model } from 'sequelize-typescript';
import { User } from './user/User';
export declare class RatingStatistic extends Model {
    id: string;
    userId: string;
    reviewCount: number;
    averageMark: number;
    user: User;
}
