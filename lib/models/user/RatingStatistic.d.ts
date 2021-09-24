import { Model } from 'sequelize-typescript';
import { User } from './User';
declare enum RatingStatus {
    verify = "verified",
    reliable = "reliable",
    topRanked = "topRanked"
}
export declare class RatingStatistic extends Model {
    id: string;
    userId: string;
    reviewCount: number;
    averageMark: number;
    status: RatingStatus;
    user: User;
}
export {};
