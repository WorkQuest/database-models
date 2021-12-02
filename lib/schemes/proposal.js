"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const Proposal_1 = require("../models/Proposal/Proposal");
exports.proposalNumberSchema = Joi.number().example(1).label('ProposalNumber');
exports.proposalTitleSchema = Joi.string().example('New post').label('ProposalTitle');
exports.proposalDescriptionSchema = Joi.string().example('Hello world').label('ProposalDescription');
exports.proposalStatus = Joi.string().valid(...Object.values(Proposal_1.ProposalStatus)).example(Proposal_1.ProposalStatus.Pending).label("ProposalStatus");
exports.proposalTxHashSchema = Joi.number().label("ProposalCreatorHash");
exports.proposalSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    number: exports.proposalNumberSchema,
    title: exports.proposalTitleSchema,
    description: exports.proposalDescriptionSchema,
    status: exports.proposalStatus,
    txHash: exports.proposalTxHashSchema,
}).label('Proposal');
