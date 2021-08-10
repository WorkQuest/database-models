"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const Disputes_1 = require("../models/Disputes");
exports.disputeStatusSchema = Joi.string().max(255).valid(...Disputes_1.DisputeStatuses).default(Disputes_1.DisputeStatus.active).example('active').label('DisputeStatusSchema');
exports.problemDescriptionSchema = Joi.string().example('The problem is...').label('ProblemDescriptionSchema');
exports.adminDecisionSchema = Joi.string().example('Decision is...').label('AdminDecisionSchema');
exports.disputeSchema = Joi.object({
    id: common_1.idSchema,
    employerId: common_1.idSchema,
    workerId: common_1.idSchema,
    questId: common_1.idSchema,
    status: exports.disputeStatusSchema,
    problem: exports.problemDescriptionSchema,
    decision: exports.adminDecisionSchema,
}).label("QuestSchema");
exports.disputesSchema = Joi.array().items(exports.disputeSchema).label('Disputes');
