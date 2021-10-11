import { Model } from "sequelize-typescript";
import { SpecializationFilter } from "../filtres/SpecializationFilter";
export declare class QuestSpecializationFilter extends Model {
    id: string;
    questId: string;
    specializationKey: string;
    specialization: SpecializationFilter;
}
