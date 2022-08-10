import * as Joi from "joi";
import { ProposalStatus } from "../models";
import { userShortForListSchema } from "./user";
import { walletAddressSchema, walletBech32AddressSchema } from "./wallet";
import {
  idSchema,
  countSchema,
  limitSchema,
  offsetSchema,
  searchSchema,
  timestampSchema,
  sortDirectionSchema,
  accountAddressSchema,
  transactionHashSchema, blockNumberSchema, coinAmountSchema,
} from "./common";

export const proposalTitleSchema = Joi.string().example('New post').label('ProposalTitle');
export const proposalDescriptionSchema = Joi.string().example('Hello world').label('ProposalDescription');
export const proposalStatusSchema = Joi.number().valid(...Object.keys(ProposalStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(ProposalStatus.Pending).label("ProposalStatus");
export const proposalNonceIdSchema = Joi.string().example("65464546452165556432245623").label('ProposalNonceId');

export const proposalVoteCastVotesSchema = Joi.string().example('Vote...').label('ProposalVoteCastVotes')
export const proposalVoteCastSupportSchema = Joi.boolean().example(true).label('ProposalVoteCastSupport');

export const proposalCreatedEvenVotingPeriodSchema = Joi.number().example(4).label('ProposalCreatedEvenVotingPeriod');
export const proposalCreatedEvenMinimumQuorumSchema = Joi.number().example(2).label('ProposalCreatedEvenMinimumQuorum');

export const proposalStatusesSchema = Joi.array().items(proposalStatusSchema).label('ProposalStatuses');

export const proposalSchema = Joi.object({
  id: idSchema,
  discussionId: idSchema,
  proposerUserId: idSchema,
  title: proposalTitleSchema,
  description: proposalDescriptionSchema,
  status: proposalStatusSchema,
  nonce: proposalNonceIdSchema,
}).label('Proposal');

export const proposalVoteCastEventSchema = Joi.object({
  proposalId: idSchema,
  transactionHash: transactionHashSchema,
  voter: accountAddressSchema,
  contractProposalId: countSchema,
  support: proposalVoteCastSupportSchema,
  votes: proposalVoteCastVotesSchema,
  timestamp: timestampSchema,
}).label('ProposalVoteCastEvent');

export const proposalCreatedEventSchema = Joi.object({
  proposalId: idSchema,
  transactionHash: transactionHashSchema,
  contractProposalId: countSchema,
  nonce: proposalNonceIdSchema,
  timestamp: timestampSchema,
  proposer: accountAddressSchema,
  description: proposalDescriptionSchema,
  votingPeriod: proposalCreatedEvenVotingPeriodSchema,
  minimumQuorum: proposalCreatedEvenMinimumQuorumSchema,
}).label('ProposalEvent');

export const proposalSortSchema = Joi.object({
  createdAt: sortDirectionSchema,
}).default({}).label('ProposalSort');

export const proposalQuerySchema = Joi.object({
  q: searchSchema,
  limit: limitSchema,
  offset: offsetSchema,
  sort: proposalSortSchema,
  statuses: proposalStatusesSchema.default(null),
}).label('ProposalQuery');

export const proposalVoteCastEventSortSchema = Joi.object({
  createdAt: sortDirectionSchema,
}).default({}).label('ProposalVoteCastEventSort');

export const proposalVoteCastEventQuerySchema = Joi.object({
  q: searchSchema,
  limit: limitSchema,
  offset: offsetSchema,
  sort: proposalVoteCastEventSortSchema,
  support: proposalVoteCastSupportSchema.default(null),
}).label('ProposalQuery');

export const proposalDelegatorSchema = Joi.object({
  bech32Address: walletBech32AddressSchema,
  address: walletAddressSchema,
  user: userShortForListSchema,
}).label('ProposalDelegator');

export const proposalDelegateChangedEventSchema = Joi.object({
  blockNumber: blockNumberSchema,
  transactionHash: transactionHashSchema,
  delegator: walletAddressSchema,
  fromDelegate: walletAddressSchema,
  toDelegate: walletAddressSchema,
  timestamp: timestampSchema,
  delegatorWallet: proposalDelegatorSchema,
  fromDelegateWallet: proposalDelegatorSchema,
  toDelegateWallet: proposalDelegatorSchema,
}).label('ProposalDelegateChangedEvent');

export const proposalDelegateVotesChangedEventSchema = Joi.object({
  blockNumber: blockNumberSchema,
  transactionHash: transactionHashSchema,
  delegator: walletAddressSchema,
  delegatee: walletAddressSchema,
  previousBalance: coinAmountSchema,
  newBalance: coinAmountSchema,
  timestamp: timestampSchema,
}).label('ProposalDelegateVotesChangedEvent');

export const proposalDelegateUserHistorySchema = Joi.object({
  delegator: walletAddressSchema,
  delegatee: walletAddressSchema,
  timestamp: timestampSchema,
  delegateeWallet: proposalDelegatorSchema,
}).label('ProposalDelegateUserHistory');