import { Model } from 'sequelize-typescript';
import { Quest } from './Quest';
import { Admin } from "../admin/Admin";
import { BlackListStatus } from "../types";
export declare class QuestBlackList extends Model {
    id: string;
    adminId: string;
    questId: string;
    reason: string;
    status: BlackListStatus;
    admin: Admin;
    quest: Quest;
}
