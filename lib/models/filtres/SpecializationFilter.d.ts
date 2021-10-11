import { Model } from "sequelize-typescript";
import { IndustryFilter } from "./IndustryFilter";
export declare class SpecializationFilter extends Model {
    key: string;
    industryKey: number;
    specialization: string;
    industry: IndustryFilter;
}
