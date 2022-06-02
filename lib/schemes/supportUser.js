"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportTicketSchema = exports.postedDecisionSupportTicketSchema = exports.statusSupportTicketSchema = exports.descriptionSupportTicketSchema = exports.titleSupportTicketSchema = exports.numberSupportTicketSchema = void 0;
const Joi = __importStar(require("joi"));
const user_1 = require("./user");
const common_1 = require("./common");
const models_1 = require("../models");
exports.numberSupportTicketSchema = Joi.number().example(725212).label('NumberSupportTicket');
exports.titleSupportTicketSchema = Joi.string().example('New support post').label('TitleSupportTicket');
exports.descriptionSupportTicketSchema = Joi.string().example('New support description in the post').label('DescriptionSupportTicket');
exports.statusSupportTicketSchema = Joi.number().valid(...Object.values(models_1.TicketStatus)).example(models_1.TicketStatus.Pending).label("StatusSupportTicket");
exports.postedDecisionSupportTicketSchema = Joi.string().valid(...Object.values(models_1.PostedDecision)).example(models_1.PostedDecision.OnEmailWithTheAuthor).label("PostedDecisionSupportTicket");
exports.supportTicketSchema = Joi.object({
    id: common_1.idSchema,
    number: exports.numberSupportTicketSchema,
    authorId: common_1.idSchema,
    replyToMail: user_1.userEmailSchema,
    title: exports.titleSupportTicketSchema,
    description: exports.descriptionSupportTicketSchema,
    status: exports.statusSupportTicketSchema,
    decisionPostedIn: exports.postedDecisionSupportTicketSchema,
    completionAt: common_1.isoDateSchema,
}).label('UserSupportTicket');
