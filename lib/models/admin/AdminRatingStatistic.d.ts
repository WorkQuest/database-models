import { Model } from 'sequelize-typescript';
import { Admin } from './Admin';
export declare class AdminRatingStatistic extends Model {
    id: string;
    adminId: string;
    reviewCount: number;
    averageMark: number;
    admin: Admin;
}
