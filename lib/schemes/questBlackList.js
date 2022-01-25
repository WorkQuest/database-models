"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
exports.questBlockReasonSchema = Joi.string().example('Quest was blocked').label('QuestBlockReason');
exports.questBlackListSchema = Joi.object({
    id: common_1.idSchema,
    adminId: common_1.idSchema,
    questId: common_1.idSchema,
    reason: exports.questBlockReasonSchema,
}).label('QuestBlackList');
