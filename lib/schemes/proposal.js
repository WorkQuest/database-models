"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
exports.proposalNumberSchema = Joi.number().example(1).label('ProposalNumber');
exports.proposalTitleSchema = Joi.string().example('New post').label('ProposalTitle');
exports.proposalDescriptionSchema = Joi.string().example('Hello world').label('ProposalDescription');
exports.proposalStatus = Joi.number().valid(...Object.values(models_1.ProposalStatus)).example(models_1.ProposalStatus.Pending).label("ProposalStatus");
exports.proposalTxHashSchema = Joi.string().example('18vk40cc3er48fzs5ghqzxy88uq').label("ProposalCreatorHash");
exports.proposalTxIdSchema = Joi.string().label('ProposalTxIdFromContract');
exports.proposalSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    txId: exports.proposalTxIdSchema,
    number: exports.proposalNumberSchema,
    title: exports.proposalTitleSchema,
    description: exports.proposalDescriptionSchema,
    status: exports.proposalStatus,
    txHash: exports.proposalTxHashSchema,
}).label('Proposal');
