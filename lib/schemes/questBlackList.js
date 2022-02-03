"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questBlackListSchema = exports.questBlockStatusSchema = exports.questBlockReasonSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
const quest_1 = require("./quest");
exports.questBlockReasonSchema = Joi.string().example('Quest was blocked').label('QuestBlockReason');
exports.questBlockStatusSchema = Joi.number().valid(...Object.keys(models_1.BlackListStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.BlackListStatus.Blocked).label('QuestBlockStatus');
exports.questBlackListSchema = Joi.object({
    id: common_1.idSchema,
    adminId: common_1.idSchema,
    questId: common_1.idSchema,
    reason: exports.questBlockReasonSchema,
    status: exports.questBlockStatusSchema,
    previousQuestStatus: quest_1.questStatusSchema,
}).label('QuestBlackList');
