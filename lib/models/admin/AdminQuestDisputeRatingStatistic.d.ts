import { Model } from 'sequelize-typescript';
import { Admin } from './Admin';
export declare class AdminQuestDisputeRatingStatistic extends Model {
    id: string;
    adminId: string;
    reviewCount: number;
    averageMark: number;
    admin: Admin;
}
