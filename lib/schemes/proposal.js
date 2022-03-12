"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.proposalVoteCastEventQuerySchema = exports.proposalVoteCastEventSortSchema = exports.proposalQuerySchema = exports.proposalSortSchema = exports.proposalCreatedEventSchema = exports.proposalVoteCastEventSchema = exports.proposalSchema = exports.proposalStatusesSchema = exports.proposalCreatedEvenMinimumQuorumSchema = exports.proposalCreatedEvenVotingPeriodSchema = exports.proposalVoteCastSupportSchema = exports.proposalVoteCastVotesSchema = exports.proposalNonceIdSchema = exports.proposalStatusSchema = exports.proposalDescriptionSchema = exports.proposalTitleSchema = void 0;
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
    statuses: exports.proposalStatusesSchema,
    q: common_1.searchSchema,
    sort: exports.proposalSortSchema,
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
}).label('ProposalQuery');
exports.proposalVoteCastEventSortSchema = Joi.object({
    createdAt: common_1.sortDirectionSchema,
}).default({}).label('ProposalVoteCastEventSort');
exports.proposalVoteCastEventQuerySchema = Joi.object({
    q: common_1.searchSchema,
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
    sort: exports.proposalVoteCastEventSortSchema,
    support: exports.proposalVoteCastSupportSchema,
}).label('ProposalQuery');
