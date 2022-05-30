"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("joi"));
const user_1 = require("./user");
const common_1 = require("./common");
const models_1 = require("../models");
exports.titleSupportSchema = Joi.string().example('New support post').label('TitleSupport');
exports.descriptionSupportSchema = Joi.string().example('New support description in the post').label('DescriptionSupport');
exports.supportTicketSchema = Joi.number().example(725212).label('SupportTicket');
exports.supportPostStatusSchema = Joi.string().valid(...Object.values(models_1.SupportStatus)).example(models_1.SupportStatus).label("SupportPostStatus");
exports.supportPostDecisionSchema = Joi.string().valid(...Object.values(models_1.AdminSupportResolved)).example(models_1.AdminSupportResolved).label("SupportPostDecision");
exports.supportCreateSchema = Joi.object({
    email: user_1.userEmailSchema,
    title: exports.titleSupportSchema,
    description: exports.descriptionSupportSchema,
}).label('SupportCreate');
exports.supportPostResponseSchema = Joi.object({
    supportTicket: exports.supportTicketSchema,
    authorId: common_1.idSchema,
    email: user_1.userEmailSchema,
    title: exports.titleSupportSchema,
    description: exports.descriptionSupportSchema,
    status: exports.supportPostStatusSchema,
    decision: exports.supportPostDecisionSchema
}).label('SupportPostResponse');
