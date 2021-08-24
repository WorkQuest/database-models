import * as Joi from "joi";

const skillsSchema = Joi.string().label('SkillsSchema')
const nameCategory = Joi.string().label('NameCategory');
const filterSkillsSchema = Joi.array().items(skillsSchema).label('SkillsSchema')

export const questFilterSchema = Joi.object({
    filterCategory: nameCategory,
    filterSkills: filterSkillsSchema
}).label('QuestFilter');

export const filterSchema = Joi.array().items(questFilterSchema).label('Filter');
