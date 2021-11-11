"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
exports.completedQuestsSchema = Joi.number().example(25).label('CompletedQuestsSchema');
exports.openedQuestsSchema = Joi.number().example(27).label('OpenedQuestsSchema');
exports.questsStatisticSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    completedQuests: exports.completedQuestsSchema,
    openedQuests: exports.openedQuestsSchema
}).label('questsStatisticSchema');