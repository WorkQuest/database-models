import { Model } from 'sequelize-typescript';
import { Quest } from './quest/Quest';
import { User } from "./user/User";
export declare type SkillsMap = {
    [category: string]: string[];
};
export declare type SkillsRaw = {
    category: string;
    skill: string;
};
export declare class SkillFilter extends Model {
    id: string;
    userId: string;
    questId: string;
    category: string;
    skill: string;
    user: User;
    quest: Quest;
    static toMapSkills(skillsRaw: SkillsRaw[]): SkillsMap;
    static toRawSkills(skillsMap: SkillsMap, alias: string, id: string): SkillsRaw[];
    static toRawSkillsForFilter(skillsMap: SkillsMap): SkillsRaw[];
    static toRawUserSkills(skillsMap: SkillsMap, userId: string): SkillsRaw[];
    static toRawQuestSkills(skillsMap: SkillsMap, questId: string): SkillsRaw[];
}
