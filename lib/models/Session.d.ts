import { Model } from 'sequelize-typescript';
import { Admin } from './Admin';
export declare class Session extends Model {
    id: string;
    userId: string;
    user: Admin;
}
