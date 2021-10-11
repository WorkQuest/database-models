import { Model } from "sequelize-typescript";
import { IndustryFilter } from "../filtres/IndustryFilter";
import { SpecializationFilter } from "../filtres/SpecializationFilter";
import { User } from "./User";
export declare class UserSpecializationFilter extends Model {
    id: string;
    userId: string;
    industryKey: number;
    specializationKey: number;
    user: User;
    industryFilter: IndustryFilter;
    specializationFilter: SpecializationFilter;
}
