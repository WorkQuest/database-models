"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
exports.completedSchema = Joi.number().example(25).label('CompletedQuestsSchema');
exports.openedSchema = Joi.number().example(27).label('OpenedQuestsSchema');
exports.questsStatisticSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    completed: exports.completedSchema,
    opened: exports.openedSchema
}).label('questsStatisticSchema');
