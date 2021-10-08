import { Model } from "sequelize-typescript";
import { SpecializationFilter } from "./SpecializationFilter";
export declare class IndustryFilter extends Model {
    key: string;
    industry: string;
    specializations: SpecializationFilter[];
}
