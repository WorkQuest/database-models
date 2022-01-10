import { Model } from 'sequelize-typescript';
import { User } from './User';
import { RatingStatus } from "./types";
export declare class RatingStatistic extends Model {
    id: string;
    userId: string;
    reviewCount: number;
    averageMark: number;
    status: RatingStatus;
    user: User;
}
