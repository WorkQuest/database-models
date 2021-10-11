import { Model } from "sequelize-typescript";
export declare class QuestSpecializationFilter extends Model {
    id: string;
    questId: string;
    industryKey: number;
    specializationKey: number;
}
