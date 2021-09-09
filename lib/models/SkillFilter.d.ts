import { Model } from 'sequelize-typescript';
import { Quest } from './Quest';
import { User } from "./User";
export declare class SkillFilter extends Model {
    id: string;
    userId: string;
    questId: string;
    category: string;
    skill: string;
    user: User;
    quest: Quest;
}
