import { Model } from "sequelize-typescript";
import { SpecializationFilter } from "./SpecializationFilter";
export declare class IndustryFilter extends Model {
    key: number;
    industry: string;
    specialisationFilters: SpecializationFilter[];
}
