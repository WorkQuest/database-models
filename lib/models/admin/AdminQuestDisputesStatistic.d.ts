import { Model } from 'sequelize-typescript';
import { Admin } from './Admin';
export declare class AdminQuestDisputesStatistic extends Model {
    id: string;
    adminId: string;
    reviewCount: number;
    averageMark: number;
    resolvedQuestDisputes: number;
    averageResolutionTimeInSeconds: number;
    admin: Admin;
    avgMark: number;
}
