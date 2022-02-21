"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const admin_1 = require("./admin");
const quest_1 = require("./quest");
const user_1 = require("./user");
const models_1 = require("../models");
const common_1 = require("./common");
exports.questDisputeNumberSchema = Joi.number().example('123').label('DisputeNumber');
exports.questDisputeStatusSchema = Joi.number().valid(...Object.keys(models_1.DisputeStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).default(models_1.DisputeStatus.pending).example(models_1.DisputeStatus.pending).label('DisputeStatus');
exports.questDisputeReasonSchema = Joi.string().max(255).valid(...Object.values(models_1.DisputeReason)).default(models_1.DisputeReason.anotherReason).example(models_1.DisputeReason.anotherReason).label('DisputeReason');
exports.questDisputeProblemDescriptionSchema = Joi.string().example('The problem is...').label('ProblemDescription');
exports.questDisputeDecisionDescriptionSchema = Joi.string().example('Decision is...').label('DecisionDescription');
exports.questDisputeStatusesSchema = Joi.array().items(exports.questDisputeStatusSchema).label('QuestDisputeStatuses');
exports.questDisputeSchema = Joi.object({
    id: common_1.idSchema,
    questId: common_1.idSchema,
    openDisputeUserId: common_1.idSchema,
    opponentUserId: common_1.idSchema,
    assignedAdminId: common_1.idSchema,
    disputeNumber: exports.questDisputeNumberSchema,
    status: exports.questDisputeStatusSchema,
    reason: exports.questDisputeReasonSchema,
    openOnQuestStatus: quest_1.questStatusSchema,
    problemDescription: exports.questDisputeProblemDescriptionSchema,
    decisionDescription: exports.questDisputeDecisionDescriptionSchema,
    openDisputeUser: user_1.userShortSchema,
    opponentUser: user_1.userShortSchema,
    assignedAdmin: admin_1.adminSchema,
    quest: quest_1.questSchema,
    acceptedAt: common_1.isoDateSchema,
    resolveAt: common_1.isoDateSchema,
    createdAt: common_1.isoDateSchema,
}).label("QuestDispute");
exports.questDisputeQuerySchema = Joi.object({
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
    statuses: exports.questDisputeStatusesSchema.unique().default(null),
}).label('disputeQuery');
exports.questDisputesSchema = Joi.array().items(exports.questDisputeSchema).label('QuestDisputes');
exports.questDisputesWithCountSchema = Joi.object({
    count: common_1.countSchema,
    disputes: exports.questDisputeSchema,
}).label('QuestsForGetWithCount');
