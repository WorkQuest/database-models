import { Model } from 'sequelize-typescript';
import { User } from './User';
export declare enum RatingStatus {
    topRanked = 0,
    reliable = 1,
    verified = 2,
    noStatus = 3
}
export declare class RatingStatistic extends Model {
    id: string;
    userId: string;
    reviewCount: number;
    averageMark: number;
    status: RatingStatus;
    user: User;
}
