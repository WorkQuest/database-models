import * as Joi from "joi";
import {idSchema, limitSchema, offsetSchema, searchSchema, transactionHashSchema} from "./common";
import {ProposalStatus} from "../models";

export const proposalNumberSchema = Joi.number().example(1).label('ProposalNumber');
export const proposalTitleSchema = Joi.string().example('New post').label('ProposalTitle');
export const proposalDescriptionSchema = Joi.string().example('Hello world').label('ProposalDescription');
export const proposalStatusSchema = Joi.number().valid(...Object.keys(ProposalStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(ProposalStatus.Pending).label("ProposalStatus");
export const proposerIdWalletSchema = Joi.string().example('0xe7489ba661e0487669a685d76f4ee978e931dec9').label('ContractAddress');
export const proposerVotingPeriodSchema = Joi.string().example('1').label('ProposerVotingPeriod');
export const proposalTimestampSchema = Joi.date().timestamp('unix').example(1631568392).label('ContractTimeStamp');
export const nonceIdSchema = Joi.string().example("65464546452165556432245623").label('NonceId');
export const proposalStatusesSchema = Joi.array().items(proposalStatusSchema).label('ProposalStatuses');

export const proposalSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  proposer: proposerIdWalletSchema,
  nonce: nonceIdSchema,
  proposalId: proposalNumberSchema,
  title: proposalTitleSchema,
  description: proposalDescriptionSchema,
  status: proposalStatusSchema,
}).label('Proposal');

export const proposalEventSchema = Joi.object({
  transId: proposalNumberSchema,
  transactionHash: transactionHashSchema,
  timestamp: proposalTimestampSchema,
  blockNumber: proposalTimestampSchema,
  proposer: proposerIdWalletSchema,
  description: proposalDescriptionSchema,
  votingPeriod: proposerVotingPeriodSchema,
  minimumQuorum: proposerVotingPeriodSchema,
})

export const allProposalsDataSchema = Joi.array().items(proposalEventSchema).label('AllProposalsData');

export const allProposalsSchema = Joi.object({
  count: proposalNumberSchema,
  data: allProposalsDataSchema
}).label('AllProposals');

export const proposalQuerySchema = Joi.object({
  statuses: proposalStatusesSchema,
  q: searchSchema,
  limit: limitSchema,
  offset: offsetSchema,
}).label('ProposalQuery');
