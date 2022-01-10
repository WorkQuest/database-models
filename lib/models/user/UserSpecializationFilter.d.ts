import { Model } from "sequelize-typescript";
import { User } from "./User";
import { IndustryFilter } from "../filtres/IndustryFilter";
import { SpecializationFilter } from "../filtres/SpecializationFilter";
export declare class UserSpecializationFilter extends Model {
    id: string;
    userId: string;
    industryKey: number;
    specializationKey: number;
    path: string;
    user: User;
    industryFilter: IndustryFilter;
    specializationFilter: SpecializationFilter;
}
