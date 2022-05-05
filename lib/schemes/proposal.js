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
const models_1 = require("../models");
const common_1 = require("./common");
exports.proposalTitleSchema = Joi.string().example('New post').label('ProposalTitle');
exports.proposalDescriptionSchema = Joi.string().example('Hello world').label('ProposalDescription');
exports.proposalStatusSchema = Joi.number().valid(...Object.keys(models_1.ProposalStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.ProposalStatus.Pending).label("ProposalStatus");
exports.proposalNonceIdSchema = Joi.string().example("65464546452165556432245623").label('ProposalNonceId');
exports.proposalVoteCastVotesSchema = Joi.string().example('Vote...').label('ProposalVoteCastVotes');
exports.proposalVoteCastSupportSchema = Joi.boolean().example(true).label('ProposalVoteCastSupport');
exports.proposalCreatedEvenVotingPeriodSchema = Joi.number().example(4).label('ProposalCreatedEvenVotingPeriod');
exports.proposalCreatedEvenMinimumQuorumSchema = Joi.number().example(2).label('ProposalCreatedEvenMinimumQuorum');
exports.proposalStatusesSchema = Joi.array().items(exports.proposalStatusSchema).label('ProposalStatuses');
exports.proposalSchema = Joi.object({
    id: common_1.idSchema,
    discussionId: common_1.idSchema,
    proposerUserId: common_1.idSchema,
    title: exports.proposalTitleSchema,
    description: exports.proposalDescriptionSchema,
    status: exports.proposalStatusSchema,
    nonce: exports.proposalNonceIdSchema,
}).label('Proposal');
exports.proposalVoteCastEventSchema = Joi.object({
    proposalId: common_1.idSchema,
    transactionHash: common_1.transactionHashSchema,
    voter: common_1.accountAddressSchema,
    contractProposalId: common_1.countSchema,
    support: exports.proposalVoteCastSupportSchema,
    votes: exports.proposalVoteCastVotesSchema,
    timestamp: common_1.timestampSchema,
}).label('ProposalVoteCastEvent');
exports.proposalCreatedEventSchema = Joi.object({
    proposalId: common_1.idSchema,
    transactionHash: common_1.transactionHashSchema,
    contractProposalId: common_1.countSchema,
    nonce: exports.proposalNonceIdSchema,
    timestamp: common_1.timestampSchema,
    proposer: common_1.accountAddressSchema,
    description: exports.proposalDescriptionSchema,
    votingPeriod: exports.proposalCreatedEvenVotingPeriodSchema,
    minimumQuorum: exports.proposalCreatedEvenMinimumQuorumSchema,
}).label('ProposalEvent');
exports.proposalSortSchema = Joi.object({
    createdAt: common_1.sortDirectionSchema,
}).default({}).label('ProposalSort');
exports.proposalQuerySchema = Joi.object({
    q: common_1.searchSchema,
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
    sort: exports.proposalSortSchema,
    statuses: exports.proposalStatusesSchema.default(null),
}).label('ProposalQuery');
exports.proposalVoteCastEventSortSchema = Joi.object({
    createdAt: common_1.sortDirectionSchema,
}).default({}).label('ProposalVoteCastEventSort');
exports.proposalVoteCastEventQuerySchema = Joi.object({
    q: common_1.searchSchema,
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
    sort: exports.proposalVoteCastEventSortSchema,
    support: exports.proposalVoteCastSupportSchema.default(null),
}).label('ProposalQuery');
