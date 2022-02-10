import { Model } from 'sequelize-typescript';
import { User } from '../user/User';
import { Admin } from '../admin/Admin';
import { Quest } from './Quest';
export declare class ReviewAdmin extends Model {
    id: string;
    questId: string;
    fromUserId: string;
    toAdminId: string;
    message: string;
    mark: number;
    fromUser: User;
    toUser: Admin;
    quest: Quest;
    avgMark: number;
}
