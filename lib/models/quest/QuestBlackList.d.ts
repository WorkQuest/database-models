import { Model } from 'sequelize-typescript';
import { Quest, QuestStatus } from './Quest';
import { Admin } from "../admin/Admin";
import { BlackListStatus } from "../types";
export declare class QuestBlackList extends Model {
    id: string;
    blockedByAdminId: string;
    unblockedByAdminId: string;
    questId: string;
    reason: string;
    questStatusBeforeBlocking: QuestStatus;
    status: BlackListStatus;
    unblockedAt: Date;
    quest: Quest;
    blockedByAdmin: Admin;
    unblockedByAdmin: Admin;
}
