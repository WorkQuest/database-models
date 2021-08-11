"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_1 = require("@joi/date");
const JoiImport = require("joi");
const Joi = JoiImport.extend(date_1.default);
const common_1 = require("./common");
const Disputes_1 = require("../models/Disputes");
const quest_1 = require("./quest");
const user_1 = require("./user");
exports.disputeStatusSchema = Joi.string().max(255).valid(...Disputes_1.DisputeStatuses).default(Disputes_1.DisputeStatus.pending).example('active').label('DisputeStatusSchema');
exports.problemDescriptionSchema = Joi.string().example('The problem is...').label('ProblemDescriptionSchema');
exports.adminDecisionSchema = Joi.string().example('Decision is...').label('AdminDecisionSchema');
exports.disputeOpeningTimeSchema = Joi.date().format('YYYY-MM-DD HH:mm').example('2021-08-10 09:48').label('DisputeOpeningTimeSchema');
exports.disputeNumberSchema = Joi.number().example('123').label('DisputeNumberSchema');
exports.disputeSchema = Joi.object({
    id: common_1.idSchema,
    disputeNumber: exports.disputeNumberSchema,
    employerId: common_1.idSchema,
    workerId: common_1.idSchema,
    questId: common_1.idSchema,
    questTitle: quest_1.questTitleSchema,
    user: user_1.userSchema,
    assignedWorker: user_1.userSchema,
    disputeOpeningTime: exports.disputeOpeningTimeSchema,
    status: exports.disputeStatusSchema,
    problem: exports.problemDescriptionSchema,
    decision: exports.adminDecisionSchema,
}).label("QuestSchema");
exports.disputesSchema = Joi.array().items(exports.disputeSchema).label('Disputes');
exports.disputesQuerySchema = Joi.object({
    offset: common_1.offsetSchema,
    limit: common_1.limitSchema,
}).label('DisputesQuery');
