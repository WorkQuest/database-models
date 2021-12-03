import * as Joi from "joi";
import {idSchema} from "./common";
import {ProposalStatus} from "../models";

export const proposalNumberSchema = Joi.number().example(1).label('ProposalNumber');
export const proposalTitleSchema = Joi.string().example('New post').label('ProposalTitle');
export const proposalDescriptionSchema = Joi.string().example('Hello world').label('ProposalDescription');
export const proposalStatus = Joi.number().valid(...Object.values(ProposalStatus)).example(ProposalStatus.Pending).label("ProposalStatus");
export const proposalTxHashSchema = Joi.string().example('18vk40cc3er48fzs5ghqzxy88uq').label("ProposalCreatorHash");

export const proposalSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  number: proposalNumberSchema,
  title: proposalTitleSchema,
  description: proposalDescriptionSchema,
  status: proposalStatus,
  txHash: proposalTxHashSchema,
}).label('Proposal');
