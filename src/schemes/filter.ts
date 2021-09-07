import * as Joi from "joi";

export const filterCategorySchema = Joi.string().label('FilterCategory');
export const filterSkillSchema = Joi.string().label('FilterSkill');

export const filterSchema = Joi.object({
  category: filterCategorySchema,
  skill: filterSkillSchema,
}).label('Filter');

export const filtersSchema = Joi.array().items(filterSchema).label('FiltersSchema');

// export const questFilterSchema = Joi.object({
//   filterCategory: nameCategory,
//   filterSkills: filterSkillsSchema
// }).label('QuestFilter');
//
// export const filterSchema = Joi.array().items(questFilterSchema).label('FilterSchema');
//
// export const questFilterSchemaResponse = Joi.object({
//   id: idSchema,
//   questId: idSchema,
//   category: filterCategorySchema,
//   skills: filterSkillSchema
// }).label('QuestFilterSchemaResponse')
// export const userFilterSchemaResponse = Joi.object({
//   id: idSchema,
//   userId: idSchema,
//   category: filterCategorySchema,
//   skills: filterSkillSchema
// }).label('UserFilterSchemaResponse')
//
// export const  shortFilterSchema = Joi.object({
//   category: filterCategorySchema,
//   skills: filterSkillSchema
// }).label('ShortFilterSchema')
