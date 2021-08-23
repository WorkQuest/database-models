import { Model } from 'sequelize-typescript';
import { Quest } from './Quest';
import { User } from "./User";
export declare class Filter extends Model {
    id: string;
    userId: string;
    questId: string;
    Category: string;
    Skills: string;
    user: User;
    quest: Quest;
}
