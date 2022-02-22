import { Model } from 'sequelize-typescript';
import { Admin } from './Admin';
export declare class AdminDIsputeStatistic extends Model {
    id: string;
    adminId: string;
    resolvedDisputes: number;
    averageResolutionTime: number;
    admin: Admin;
}
