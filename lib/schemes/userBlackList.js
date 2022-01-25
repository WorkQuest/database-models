"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
const user_1 = require("./user");
exports.userBlockReasonSchema = Joi.string().example('User was blocked').label('UserBlockReason');
exports.userBlockStatusSchema = Joi.number().valid(...Object.keys(models_1.BlackListStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.BlackListStatus.Blocked).label('UserBlockStatus');
exports.userBlackListSchema = Joi.object({
    id: common_1.idSchema,
    adminId: common_1.idSchema,
    questId: common_1.idSchema,
    reason: exports.userBlockReasonSchema,
    status: exports.userBlockStatusSchema,
    previousQuestStatus: user_1.userStatusSchema,
}).label('UserBlackList');
