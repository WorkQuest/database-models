"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillFilterSchema = exports.skillFilterSkillSchema = exports.skillFilterCategorySchema = void 0;
const Joi = require("joi");
exports.skillFilterCategorySchema = Joi.string().label('SkillFilterCategory');
exports.skillFilterSkillSchema = Joi.string().label('SkillFilterSkill');
exports.skillFilterSchema = Joi.object().pattern(exports.skillFilterCategorySchema, Joi.array().items(exports.skillFilterSkillSchema).label('SkillFilterSkills')).label('SkillFilter');
