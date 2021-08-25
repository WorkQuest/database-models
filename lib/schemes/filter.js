"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const skillsSchema = Joi.string().label('SkillsSchema');
const nameCategory = Joi.string().label('NameCategory');
const filterIdSchema = common_1.idSchema.label('FilterId');
const questFilterId = common_1.idSchema.label('QuestIdFilter');
const filterSkillsSchema = Joi.array().items(skillsSchema).label('SkillsSchema');
exports.questFilterSchema = Joi.object({
    filterCategory: nameCategory,
    filterSkills: filterSkillsSchema
}).label('QuestFilter');
exports.filterSchema = Joi.array().items(exports.questFilterSchema).label('FilterSchema');
exports.questFiletrSchemaResponse = Joi.object({
    id: filterIdSchema,
    questId: questFilterId,
    filter: exports.filterSchema
});
exports.filtersSchema = Joi.array().items(exports.questFiletrSchemaResponse).label('FilterSchemaResponse');
