import { HTTPVerb } from "../types";
import { Admin } from "./Admin";
import { Model } from "sequelize-typescript";
export declare class AdminActionMetadata extends Model {
    id: string;
    adminId: string;
    path: string;
    HTTPVerb: HTTPVerb;
    admin: Admin;
}
