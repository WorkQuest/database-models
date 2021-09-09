import * as Joi from "joi";

export const skillFilterCategorySchema = Joi.string().label('SkillFilterCategory');
export const skillFilterSkillSchema = Joi.string().label('SkillFilterSkill');

export const skillFilterSchema = Joi.object({
  category: skillFilterCategorySchema,
  skill: skillFilterSkillSchema,
}).label('SkillFilter');

export const skillFiltersSchema = Joi.array().items(skillFilterSchema).label('SkillFilters');

