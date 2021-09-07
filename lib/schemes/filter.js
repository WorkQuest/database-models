"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtersSchema = exports.filterSchema = exports.filterSkillSchema = exports.filterCategorySchema = void 0;
const Joi = require("joi");
exports.filterCategorySchema = Joi.string().label('FilterCategory');
exports.filterSkillSchema = Joi.string().label('FilterSkill');
exports.filterSchema = Joi.object({
    category: exports.filterCategorySchema,
    skill: exports.filterSkillSchema,
}).label('Filter');
exports.filtersSchema = Joi.array().items(exports.filterSchema).label('FiltersSchema');
