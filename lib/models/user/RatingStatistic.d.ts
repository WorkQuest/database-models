import { Model } from 'sequelize-typescript';
import { User } from './User';
export declare enum RatingStatus {
    noStatus = "noStatus",
    verified = "verified",
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
