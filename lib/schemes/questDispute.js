"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
const quest_1 = require("./quest");
const admin_1 = require("./admin");
const user_1 = require("./user");
exports.disputeStatusSchema = Joi.string().max(255).valid(...Object.values(models_1.DisputeStatus)).default(models_1.DisputeStatus.pending).example(models_1.DisputeStatus.pending).label('DisputeStatusSchema');
exports.disputeReasonSchema = Joi.string().max(255).valid(...Object.values(models_1.DisputeReason)).default(models_1.DisputeReason.anotherReason).example(models_1.DisputeReason.anotherReason).label('DisputeReasonSchema');
exports.problemDescriptionSchema = Joi.string().example('The problem is...').label('ProblemDescriptionSchema');
exports.adminDecisionSchema = Joi.string().example('Decision is...').label('AdminDecisionSchema');
exports.disputeNumberSchema = Joi.number().example('123').label('DisputeNumberSchema');
exports.disputeSchema = Joi.object({
    id: common_1.idSchema,
    disputeNumber: exports.disputeNumberSchema,
    openDisputeUserId: common_1.idSchema,
    opponentUserId: common_1.idSchema,
    resolvedByAdminId: common_1.idSchema,
    questId: common_1.idSchema,
    openDisputeUser: user_1.userShortSchema,
    opponentUser: user_1.userShortSchema,
    resolvedByAdmin: admin_1.adminSchema,
    quest: quest_1.questSchema,
    status: exports.disputeStatusSchema,
    reason: exports.disputeReasonSchema,
    problem: exports.problemDescriptionSchema,
    decision: exports.adminDecisionSchema,
    resolveAt: common_1.isoDateSchema,
    createdAt: common_1.isoDateSchema,
    updatedAt: common_1.isoDateSchema,
}).label("DisputeSchema");
exports.disputesSchema = Joi.array().items(exports.disputeSchema).label('Disputes');
exports.disputesQuerySchema = Joi.object({
    offset: common_1.offsetSchema,
    limit: common_1.limitSchema,
}).label('DisputesQuery');
