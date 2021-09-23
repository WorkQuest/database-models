import {BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table} from 'sequelize-typescript';
import {getUUID} from '../utils';
import {Quest} from './quest/Quest';
import {User} from "./user/User";

export type SkillsMap = {
  [category: string]: string[];
}

export type SkillsRaw = {
  category: string;
  skill: string;
}

@Scopes(() => ({
  defaultScope: {
    attributes: {
      exclude: ["updatedAt"],
    }
  }
}))
@Table
export class SkillFilter extends Model {
  @Column({primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID()}) id: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, defaultValue: null}) userId: string;

  @ForeignKey(() => Quest)
  @Column({type: DataType.STRING, defaultValue: null}) questId: string;

  @Column({type: DataType.STRING, allowNull: false}) category: string;
  @Column({type: DataType.STRING, allowNull: false}) skill: string;

  @BelongsTo(() => User) user: User;
  @BelongsTo(() => Quest) quest: Quest;

  static toMapSkills(skillsRaw: SkillsRaw[]) {
    const skillsMap: SkillsMap = { };

    for (const skill of skillsRaw) {
      if (!skillsMap[skill.category]) skillsMap[skill.category] = [];

      skillsMap[skill.category].push(skill.skill);
    }

    return skillsMap;
  }

  static toRawSkills(skillsMap: SkillsMap, alias: string, id: string): SkillsRaw[] {
    const serializedSkills = [];

    for (const [category, skills] of Object.entries(skillsMap)) {
      skills.forEach(skill => serializedSkills.push({ [alias]: id , category, skill }));
    }

    return serializedSkills;
  }

  static toRawSkillsForFilter(skillsMap: SkillsMap): SkillsRaw[] {
    const serializedSkills = [];

    for (const [category, skills] of Object.entries(skillsMap)) {
      skills.forEach(skill => serializedSkills.push({ category, skill }));
    }

    return serializedSkills;
  }

  static toRawUserSkills(skillsMap: SkillsMap, userId: string): SkillsRaw[] {
    return SkillFilter.toRawSkills(skillsMap, 'userId', userId);
  }

  static toRawQuestSkills(skillsMap: SkillsMap, questId: string): SkillsRaw[] {
    return SkillFilter.toRawSkills(skillsMap, 'questId', questId);
  }
}
