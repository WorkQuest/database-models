"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
const quest_1 = require("./quest");
const user_1 = require("./user");
exports.disputeStatusSchema = Joi.string().max(255).valid(...Object.values(models_1.DisputeStatus)).default(models_1.DisputeStatus.pending).example('active').label('DisputeStatusSchema');
exports.disputeReasonSchema = Joi.string().max(255).valid(...Object.values(models_1.DisputeReason)).default(models_1.DisputeStatus.pending).example('active').label('DisputeReasonSchema');
exports.problemDescriptionSchema = Joi.string().example('The problem is...').label('ProblemDescriptionSchema');
exports.adminDecisionSchema = Joi.string().example('Decision is...').label('AdminDecisionSchema');
exports.disputeNumberSchema = Joi.number().example('123').label('DisputeNumberSchema');
exports.disputeSchema = Joi.object({
    id: common_1.idSchema,
    disputeNumber: exports.disputeNumberSchema,
    openDisputeUserId: common_1.idSchema,
    opponentUserId: common_1.idSchema,
    questId: common_1.idSchema,
    openDisputeUser: user_1.userSchema,
    opponentUser: user_1.userSchema,
    quest: quest_1.questSchema,
    status: exports.disputeStatusSchema,
    reason: exports.disputeReasonSchema,
    problem: exports.problemDescriptionSchema,
    decision: exports.adminDecisionSchema,
}).label("DisputeSchema");
exports.disputesSchema = Joi.array().items(exports.disputeSchema).label('Disputes');
exports.disputesQuerySchema = Joi.object({
    offset: common_1.offsetSchema,
    limit: common_1.limitSchema,
}).label('DisputesQuery');