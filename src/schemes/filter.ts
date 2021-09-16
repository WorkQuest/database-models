import * as Joi from "joi";

export const skillFilterCategorySchema = Joi.string().label('SkillFilterCategory');
export const skillFilterSkillSchema = Joi.string().label('SkillFilterSkill');

export const skillFilterSchema = Joi.object().pattern(
  skillFilterCategorySchema,
  Joi.array().items(skillFilterSkillSchema).label('SkillFilterSkills')
).label('SkillFilter');


