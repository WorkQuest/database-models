import { Model } from 'sequelize-typescript';
import { Admin } from "./Admin";
export declare enum Languages {
    en = "en",
    ru = "ru",
    ba = "ba",
    zh = "zh",
    fr = "fr",
    hi = "hi",
    in = "in",
    po = "po",
    sp = "sp",
    ae = "ae"
}
export declare class Language extends Model {
    id: string;
    adminId: any;
    language: Languages;
    admin: Admin;
}
