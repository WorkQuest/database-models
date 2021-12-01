"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questsStatisticSchema = exports.openedSchema = exports.completedSchema = void 0;
const Joi = require("joi");
exports.completedSchema = Joi.number().example(25).label('CompletedQuests');
exports.openedSchema = Joi.number().example(27).label('OpenedQuests');
exports.questsStatisticSchema = Joi.object({
    completed: exports.completedSchema,
    opened: exports.openedSchema,
}).label('QuestsStatistic');