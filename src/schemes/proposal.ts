import * as Joi from "joi";
import {addressWalletSchema, idSchema, timestampSchema, transactionHashSchema} from "./common";
import {ProposalExecutedEvent, ProposalStatus} from "../models";

export const proposalTitleSchema = Joi.string().example('New vote').label('ProposalTitle');
export const proposalDescriptionSchema = Joi.string().example('Hello world').label('ProposalDescription');
export const proposalStatus = Joi.number().valid(...Object.values(ProposalStatus)).example(ProposalStatus.Pending).label("ProposalStatus");
export const proposalNonceSchema = Joi.string().example("65464546452165556432245623").label('ProposalNonce');

export const proposalContractIdSchema = Joi.number().example(1).label('ProposalContractId');

export const proposalCreatedEventSucceededSchema = Joi.boolean().label('ProposalCreatedEventSucceeded');
export const proposalCreatedEventDefeatedSchema = Joi.boolean().label('ProposalCreatedEventDefeated');

export const proposalCreatedEventVotingPeriodSchema = Joi.string().example('1').label('ProposerVotingPeriod');
export const proposalCreatedEventVotingDescriptionSchema = Joi.string().example('Hello world').label('ProposalCreatedEventVotingDescription');
export const proposalCreatedEventMinimumQuorumSchema = Joi.number().example('1').label('ProposalCreatedEventMinimumQuorum');

export const proposalVoteCastEventSupportSchema = Joi.boolean().label('ProposalVoteCastEventSupport');
export const proposalVoteCastEventVotesSchema = Joi.string().label('ProposalVoteCastEventVotes');

export const proposalVoteCastEventSchema = Joi.object({
  id: idSchema,
  proposalId: idSchema,
  // network
  transactionHash: transactionHashSchema,
  voter: transactionHashSchema,
  contractProposalId: proposalContractIdSchema,
  support: proposalVoteCastEventSupportSchema,
  votes: proposalVoteCastEventVotesSchema,
  timestamp: timestampSchema,
}).label('ProposalVoteCastEvent');

export const proposalCreatedEventSchema = Joi.object({
  id: idSchema,
  proposalId: idSchema,
  // network
  transactionHash: transactionHashSchema,
  contractProposalId: proposalContractIdSchema,
  nonce: proposalNonceSchema,
  proposer: addressWalletSchema,
  description: proposalCreatedEventVotingDescriptionSchema,
  votingPeriod: proposalCreatedEventVotingPeriodSchema,
  minimumQuorum: proposalCreatedEventMinimumQuorumSchema,
  timestamp: timestampSchema,
}).label('ProposalCreatedEvent');

export const proposalExecutedEventSchema = Joi.object({
  id: idSchema,
  proposalId: idSchema,
  // network
  transactionHash: transactionHashSchema,
  contractProposalId: proposalContractIdSchema,
  succeeded: proposalCreatedEventSucceededSchema,
  defeated: proposalCreatedEventDefeatedSchema,
}).label('ProposalExecutedEvent');

export const proposalSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  title: proposalTitleSchema,
  description: proposalDescriptionSchema,
  proposer: addressWalletSchema,
  status: proposalStatus,
  nonce: proposalNonceSchema,
  createdEvent: proposalCreatedEventSchema,
  executedEvent: proposalExecutedEventSchema,
}).label('Proposal');

export const proposalsSchema = Joi.array().items(proposalSchema).label('Proposals');
export const proposalCreatedEventsSchema = Joi.array().items(proposalCreatedEventSchema).label('ProposalCreatedEvents');
export const proposalExecutedEventsSchema = Joi.array().items(proposalExecutedEventSchema).label('ProposalExecutedEvents');
