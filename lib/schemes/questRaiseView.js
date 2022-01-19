"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
const quest_1 = require("./quest");
const user_1 = require("./user");
exports.questRaiseStatusSchema = Joi.number().valid(...Object.keys(models_1.QuestRaiseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.QuestRaiseStatus.Unpaid).label('QuestRaiseStatus');
exports.questRaiseDurationSchema = Joi.number().valid(...Object.keys(models_1.QuestRaiseDuration).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.QuestRaiseDuration.OneDay).label('QuestRaiseDuration');
exports.questRaiseTypeScheme = Joi.number().valid(...Object.values(models_1.QuestRaiseType)).example(models_1.QuestRaiseType.GoldPlus).label('QuestRaiseType');
exports.questRaiseViewSchema = Joi.object({
    id: common_1.idSchema,
    questId: common_1.idSchema,
    userId: common_1.idSchema,
    status: exports.questRaiseStatusSchema,
    duration: exports.questRaiseDurationSchema,
    type: exports.questRaiseTypeScheme,
    quest: quest_1.questSchema,
    user: user_1.userShortSchema,
}).default({}).label('QuestRaiseView');
