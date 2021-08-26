import * as Joi from "joi";
import {idSchema} from "./common";


const skillsSchema = Joi.string().label('SkillsSchema')
const nameCategory = Joi.string().label('NameCategory');
const filterCategorySchema = Joi.string().label('SkillsSchema')
const filterSkillSchema = Joi.string().label('NameCategory');

const questIdSchema = idSchema.label('QuestId');
const filterIdSchema = idSchema.label('FilterId');
const userIdSchema = idSchema.label('UserId')
const filterSkillsSchema = Joi.array().items(skillsSchema).label('SkillsSchema')

export const questFilterSchema = Joi.object({
    filterCategory: nameCategory,
    filterSkills: filterSkillsSchema
}).label('QuestFilter');


export const filterSchema = Joi.array().items(questFilterSchema).label('FilterSchema');

export const questFilterSchemaResponse = Joi.object({
    id: filterIdSchema,
    questId: questIdSchema,
    category: filterCategorySchema,
    skills: filterSkillSchema
})
export const userFilterSchemaResponse = Joi.object({
    id: filterIdSchema,
    userId: userIdSchema,
    category: filterCategorySchema,
    skills: filterSkillSchema
})

export const filtersSchema = Joi.array().items(questFilterSchemaResponse).label('FilterSchemaResponse')
export const filtersUserSchema = Joi.array().items(userFilterSchemaResponse).label('FilterSchemaResponse')
