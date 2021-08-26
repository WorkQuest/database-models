"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const skillsSchema = Joi.string().label('SkillsSchema');
const nameCategory = Joi.string().label('NameCategory');
const filterCategorySchema = Joi.string().label('SkillsSchema');
const filterSkillSchema = Joi.string().label('NameCategory');
const questIdSchema = common_1.idSchema.label('QuestId');
const filterIdSchema = common_1.idSchema.label('FilterId');
const userIdSchema = common_1.idSchema.label('UserId');
const filterSkillsSchema = Joi.array().items(skillsSchema).label('SkillsSchema');
exports.questFilterSchema = Joi.object({
    filterCategory: nameCategory,
    filterSkills: filterSkillsSchema
}).label('QuestFilter');
exports.filterSchema = Joi.array().items(exports.questFilterSchema).label('FilterSchema');
exports.questFilterSchemaResponse = Joi.object({
    id: filterIdSchema,
    questId: questIdSchema,
    category: filterCategorySchema,
    skills: filterSkillSchema
});
exports.userFilterSchemaResponse = Joi.object({
    id: filterIdSchema,
    userId: userIdSchema,
    category: filterCategorySchema,
    skills: filterSkillSchema
});
exports.filtersSchema = Joi.array().items(exports.questFilterSchemaResponse).label('FilterSchemaResponse');
exports.filtersUserSchema = Joi.array().items(exports.userFilterSchemaResponse).label('FilterSchemaResponse');
