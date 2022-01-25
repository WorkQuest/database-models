import { Model } from 'sequelize-typescript';
import { Quest } from './Quest';
import { Admin } from "../admin/Admin";
export declare class QuestBlackList extends Model {
    id: string;
    adminId: string;
    questId: string;
    reason: string;
    admin: Admin;
    quest: Quest;
}
