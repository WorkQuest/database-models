import { Model } from "sequelize-typescript";
import { Quest } from "./Quest";
import { SpecializationFilter } from "../filtres/SpecializationFilter";
import { IndustryFilter } from "../filtres/IndustryFilter";
export declare class QuestSpecializationFilter extends Model {
    id: string;
    questId: string;
    industryKey: number;
    specializationKey: number;
    path: string;
    quest: Quest;
    industryFilter: IndustryFilter;
    specializationFilter: SpecializationFilter;
}
