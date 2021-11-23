import { Model } from 'sequelize-typescript';
import { User } from './User';
export declare class RatingStatistic extends Model {
    id: string;
    userId: string;
    reviewCount: number;
    averageMark: number;
    user: User;
}
