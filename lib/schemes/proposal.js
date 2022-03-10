"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposalQuerySchema = exports.proposalSortSchema = exports.allProposalsSchema = exports.allProposalsDataSchema = exports.proposalEventSchema = exports.proposalSchema = exports.proposalStatusesSchema = exports.nonceIdSchema = exports.proposalTimestampSchema = exports.proposerVotingPeriodSchema = exports.proposerIdWalletSchema = exports.proposalStatusSchema = exports.proposalDescriptionSchema = exports.proposalTitleSchema = exports.proposalNumberSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
const types_1 = require("../models/proposal/types");
exports.proposalNumberSchema = Joi.number().example(1).label('ProposalNumber');
exports.proposalTitleSchema = Joi.string().example('New post').label('ProposalTitle');
exports.proposalDescriptionSchema = Joi.string().example('Hello world').label('ProposalDescription');
exports.proposalStatusSchema = Joi.number().valid(...Object.keys(types_1.ProposalStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(types_1.ProposalStatus.Pending).label("ProposalStatus");
exports.proposerIdWalletSchema = Joi.string().example('0xe7489ba661e0487669a685d76f4ee978e931dec9').label('ContractAddress');
exports.proposerVotingPeriodSchema = Joi.string().example('1').label('ProposerVotingPeriod');
exports.proposalTimestampSchema = Joi.date().timestamp('unix').example(1631568392).label('ContractTimeStamp');
exports.nonceIdSchema = Joi.string().example("65464546452165556432245623").label('NonceId');
exports.proposalStatusesSchema = Joi.array().items(exports.proposalStatusSchema).label('ProposalStatuses');
exports.proposalSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    proposer: exports.proposerIdWalletSchema,
    nonce: exports.nonceIdSchema,
    proposalId: exports.proposalNumberSchema,
    title: exports.proposalTitleSchema,
    description: exports.proposalDescriptionSchema,
    status: exports.proposalStatusSchema,
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
}).label('ProposalEvent');
exports.allProposalsDataSchema = Joi.array().items(exports.proposalEventSchema).label('AllProposalsData');
exports.allProposalsSchema = Joi.object({
    count: exports.proposalNumberSchema,
    data: exports.allProposalsDataSchema
}).label('AllProposals');
exports.proposalSortSchema = Joi.object({
    createdAt: common_1.sortDirectionSchema,
}).label('ProposalSort');
exports.proposalQuerySchema = Joi.object({
    statuses: exports.proposalStatusesSchema,
    q: common_1.searchSchema,
    sort: exports.proposalSortSchema,
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
}).label('ProposalQuery');
