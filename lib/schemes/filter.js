"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const skillsSchema = Joi.string().label('SkillsSchema');
const nameCategory = Joi.string().label('NameCategory');
const filterSkillsSchema = Joi.array().items(skillsSchema).label('SkillsSchema');
exports.questFilterSchema = Joi.object({
    filterCategory: nameCategory,
    filterSkills: filterSkillsSchema
}).label('QuestFilter');
exports.filterSchema = Joi.array().items(exports.questFilterSchema).label('Filter');
