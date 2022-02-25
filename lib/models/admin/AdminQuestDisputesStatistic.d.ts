import { Model } from 'sequelize-typescript';
import { Admin } from './Admin';
export declare class AdminQuestDisputesStatistic extends Model {
    id: string;
    adminId: string;
    resolvedQuestDisputes: number;
    averageResolutionTimeInMilliseconds: number;
    admin: Admin;
}
