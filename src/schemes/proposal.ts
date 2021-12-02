import * as Joi from "joi";
import {idSchema} from "./common";
import {ProposalStatus} from "../models/Proposal/Proposal";

export const proposalNumberSchema = Joi.number().example(1).label('ProposalNumber');
export const proposalTitleSchema = Joi.string().example('New post').label('ProposalTitle');
export const proposalDescriptionSchema = Joi.string().example('Hello world').label('ProposalDescription');
export const proposalStatus = Joi.string().valid(...Object.values(ProposalStatus)).example(ProposalStatus.Pending).label("ProposalStatus");
export const proposalTxHashSchema = Joi.number().label("ProposalCreatorHash");

export const proposalSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  number: proposalNumberSchema,
  title: proposalTitleSchema,
  description: proposalDescriptionSchema,
  status: proposalStatus,
  txHash: proposalTxHashSchema,
}).label('Proposal');
