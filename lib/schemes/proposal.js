"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
exports.proposalNumberSchema = Joi.number().example(1).label('ProposalNumber');
exports.proposalTitleSchema = Joi.string().example('New post').label('ProposalTitle');
exports.proposalDescriptionSchema = Joi.string().example('Hello world').label('ProposalDescription');
exports.proposalStatus = Joi.number().valid(...Object.values(models_1.ProposalStatus)).example(models_1.ProposalStatus.Pending).label("ProposalStatus");
exports.proposerIdWalletSchema = Joi.string().example('0xe7489ba661e0487669a685d76f4ee978e931dec9').label('ContractAddress');
exports.proposerVotingPeriodSchema = Joi.string().example('1').label('ProposerVotingPeriod');
exports.proposalTimestampSchema = Joi.date().timestamp('unix').example(1631568392).label('ContractTimeStamp');
exports.nonceIdSchema = Joi.string().example("65464546452165556432245623").label('NonceId');
exports.proposalStatusesSchema = Joi.array().items(exports.proposalStatus).label('ProposalStatuses');
exports.proposalSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    proposer: exports.proposerIdWalletSchema,
    nonce: exports.nonceIdSchema,
    proposalId: exports.proposalNumberSchema,
    title: exports.proposalTitleSchema,
    description: exports.proposalDescriptionSchema,
    status: exports.proposalStatus,
}).label('Proposal');
exports.proposalEventSchema = Joi.object({
    transId: exports.proposalNumberSchema,
    transactionHash: common_1.transactionHashSchema,
    timestamp: exports.proposalTimestampSchema,
    blockNumber: exports.proposalTimestampSchema,
    proposer: exports.proposerIdWalletSchema,
    description: exports.proposalDescriptionSchema,
    votingPeriod: exports.proposerVotingPeriodSchema,
    minimumQuorum: exports.proposerVotingPeriodSchema,
});
exports.allProposalsDataSchema = Joi.array().items(exports.proposalEventSchema).label('AllProposalsData');
exports.allProposalsSchema = Joi.object({
    count: exports.proposalNumberSchema,
    data: exports.allProposalsDataSchema
}).label('AllProposals');
exports.proposalQuerySchema = Joi.object({
    status: exports.proposalStatusesSchema,
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
}).label('ProposalQuery');
