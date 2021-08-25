"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const skillsSchema = Joi.string().label('SkillsSchema');
const nameCategory = Joi.string().label('NameCategory');
exports.filterIdSchema = Joi.alternatives().try(Joi.string().uuid(), Joi.string().default(null)).label("FilterId");
exports.questFilterId = Joi.alternatives().try(Joi.string().uuid(), Joi.string().default(null)).label("QuestIdFilter");
const filterSkillsSchema = Joi.array().items(skillsSchema).label('SkillsSchema');
exports.questFilterSchema = Joi.object({
    filterCategory: nameCategory,
    filterSkills: filterSkillsSchema
}).label('QuestFilter');
exports.filterSchema = Joi.array().items(exports.questFilterSchema).label('FilterSchema');
exports.questFilterSchemaResponse = Joi.object({
    id: exports.filterIdSchema,
    questId: exports.questFilterId,
    filter: exports.filterSchema
});
exports.filtersSchema = Joi.array().items(exports.questFilterSchemaResponse).label('FilterSchemaResponse');
