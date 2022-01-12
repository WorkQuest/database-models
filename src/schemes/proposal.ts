import * as Joi from "joi";
import {idSchema} from "./common";
import {ProposalStatus} from "../models";

export const proposalNumberSchema = Joi.number().example(1).label('ProposalNumber');
export const proposalTitleSchema = Joi.string().example('New post').label('ProposalTitle');
export const proposalDescriptionSchema = Joi.string().example('Hello world').label('ProposalDescription');
export const proposalStatus = Joi.number().valid(...Object.values(ProposalStatus)).example(ProposalStatus.Pending).label("ProposalStatus");
export const proposalTxHashSchema = Joi.string().example('18vk40cc3er48fzs5ghqzxy88uq').label("ProposalCreatorHash");
export const proposerIdWalletSchema = Joi.string().example('0xe7489ba661e0487669a685d76f4ee978e931dec9').label('ContractAddress');
export const proposerVotingPeriodSchema = Joi.string().example('1').label('ProposerVotingPeriod');
export const proposalTimestampSchema = Joi.date().timestamp('unix').example(1631568392).label('ContractTimeStamp');
export const nonceIdSchema = Joi.string().example("65464546452165556432245623").label('NonceId');


export const proposalSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  proposer: proposerIdWalletSchema,
  nonce: nonceIdSchema,
  proposalId: proposalNumberSchema,
  title: proposalTitleSchema,
  description: proposalDescriptionSchema,
  status: proposalStatus,
}).label('Proposal');

export const proposalEventSchema = Joi.object({
  transId: proposalNumberSchema,
  transactionHash: proposalTxHashSchema,
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
