import * as Joi from "joi";
import {idSchema} from "./common";

const skillsSchema = Joi.string().label('SkillsSchema')
const nameCategory = Joi.string().label('NameCategory');
const filterIdSchema = idSchema.label('FilterId');
const questFilterId = idSchema.label('QuestIdFilter')
const filterSkillsSchema = Joi.array().items(skillsSchema).label('SkillsSchema')

export const questFilterSchema = Joi.object({
    filterCategory: nameCategory,
    filterSkills: filterSkillsSchema
}).label('QuestFilter');


export const filterSchema = Joi.array().items(questFilterSchema).label('FilterSchema');


export const questFiletrSchemaResponse = Joi.object({
    id: filterIdSchema,
    questId: questFilterId,
    filter: filterSchema
})
export const filtersSchema = Joi.array().items(questFiletrSchemaResponse).label('FilterSchemaResponse')
