"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.skillFilterCategorySchema = Joi.string().label('SkillFilterCategory');
exports.skillFilterSkillSchema = Joi.string().label('SkillFilterSkill');
exports.skillFilterSchema = Joi.object({
    category: exports.skillFilterCategorySchema,
    skill: exports.skillFilterSkillSchema,
}).label('SkillFilter');
exports.skillFiltersSchema = Joi.array().items(exports.skillFilterSchema).label('SkillFilters');
