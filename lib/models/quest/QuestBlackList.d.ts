import { Model } from 'sequelize-typescript';
import { Quest, QuestStatus } from './Quest';
import { Admin } from "../admin/Admin";
import { BlackListStatus } from "../types";
export declare class QuestBlackList extends Model {
    id: string;
    adminId: string;
    questId: string;
    reason: string;
    status: BlackListStatus;
    previousQuestStatus: QuestStatus;
    admin: Admin;
    quest: Quest;
}
