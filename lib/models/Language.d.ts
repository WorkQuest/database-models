import { Model } from 'sequelize-typescript';
import { Admin } from "./admin/Admin";
export declare enum LanguagesEnum {
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
export declare const languages: LanguagesEnum[];
export declare class Language extends Model {
    id: string;
    adminId: any;
    language: LanguagesEnum;
    admin: Admin;
}
