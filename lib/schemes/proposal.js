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
exports.proposalExecutedEventsSchema = exports.proposalCreatedEventsSchema = exports.proposalsSchema = exports.proposalSchema = exports.proposalExecutedEventSchema = exports.proposalCreatedEventSchema = exports.proposalVoteCastEventSchema = exports.proposalVoteCastEventVotesSchema = exports.proposalVoteCastEventSupportSchema = exports.proposalCreatedEventMinimumQuorumSchema = exports.proposalCreatedEventVotingDescriptionSchema = exports.proposalCreatedEventVotingPeriodSchema = exports.proposalCreatedEventDefeatedSchema = exports.proposalCreatedEventSucceededSchema = exports.proposalContractIdSchema = exports.proposalNonceSchema = exports.proposalStatus = exports.proposalDescriptionSchema = exports.proposalTitleSchema = void 0;
const Joi = __importStar(require("joi"));
const common_1 = require("./common");
const models_1 = require("../models");
exports.proposalTitleSchema = Joi.string().example('New vote').label('ProposalTitle');
exports.proposalDescriptionSchema = Joi.string().example('Hello world').label('ProposalDescription');
exports.proposalStatus = Joi.number().valid(...Object.values(models_1.ProposalStatus)).example(models_1.ProposalStatus.Pending).label("ProposalStatus");
exports.proposalNonceSchema = Joi.string().example("65464546452165556432245623").label('ProposalNonce');
exports.proposalContractIdSchema = Joi.number().example(1).label('ProposalContractId');
exports.proposalCreatedEventSucceededSchema = Joi.boolean().label('ProposalCreatedEventSucceeded');
exports.proposalCreatedEventDefeatedSchema = Joi.boolean().label('ProposalCreatedEventDefeated');
exports.proposalCreatedEventVotingPeriodSchema = Joi.string().example('1').label('ProposerVotingPeriod');
exports.proposalCreatedEventVotingDescriptionSchema = Joi.string().example('Hello world').label('ProposalCreatedEventVotingDescription');
exports.proposalCreatedEventMinimumQuorumSchema = Joi.number().example('1').label('ProposalCreatedEventMinimumQuorum');
exports.proposalVoteCastEventSupportSchema = Joi.boolean().label('ProposalVoteCastEventSupport');
exports.proposalVoteCastEventVotesSchema = Joi.string().label('ProposalVoteCastEventVotes');
exports.proposalVoteCastEventSchema = Joi.object({
    id: common_1.idSchema,
    proposalId: common_1.idSchema,
    transactionHash: common_1.transactionHashSchema,
    voter: common_1.transactionHashSchema,
    contractProposalId: exports.proposalContractIdSchema,
    support: exports.proposalVoteCastEventSupportSchema,
    votes: exports.proposalVoteCastEventVotesSchema,
    timestamp: common_1.timestampSchema,
}).label('ProposalVoteCastEvent');
exports.proposalCreatedEventSchema = Joi.object({
    id: common_1.idSchema,
    proposalId: common_1.idSchema,
    transactionHash: common_1.transactionHashSchema,
    contractProposalId: exports.proposalContractIdSchema,
    nonce: exports.proposalNonceSchema,
    proposer: common_1.addressWalletSchema,
    description: exports.proposalCreatedEventVotingDescriptionSchema,
    votingPeriod: exports.proposalCreatedEventVotingPeriodSchema,
    minimumQuorum: exports.proposalCreatedEventMinimumQuorumSchema,
    timestamp: common_1.timestampSchema,
}).label('ProposalCreatedEvent');
exports.proposalExecutedEventSchema = Joi.object({
    id: common_1.idSchema,
    proposalId: common_1.idSchema,
    transactionHash: common_1.transactionHashSchema,
    contractProposalId: exports.proposalContractIdSchema,
    succeeded: exports.proposalCreatedEventSucceededSchema,
    defeated: exports.proposalCreatedEventDefeatedSchema,
}).label('ProposalExecutedEvent');
exports.proposalSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    title: exports.proposalTitleSchema,
    description: exports.proposalDescriptionSchema,
    proposer: common_1.addressWalletSchema,
    status: exports.proposalStatus,
    nonce: exports.proposalNonceSchema,
    createdEvent: exports.proposalCreatedEventSchema,
    executedEvent: exports.proposalExecutedEventSchema,
}).label('Proposal');
exports.proposalsSchema = Joi.array().items(exports.proposalSchema).label('Proposals');
exports.proposalCreatedEventsSchema = Joi.array().items(exports.proposalCreatedEventSchema).label('ProposalCreatedEvents');
exports.proposalExecutedEventsSchema = Joi.array().items(exports.proposalExecutedEventSchema).label('ProposalExecutedEvents');
