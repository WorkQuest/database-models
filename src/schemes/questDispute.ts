import * as Joi from 'joi';
import {
  idSchema, isoDateSchema, limitSchema, offsetSchema
} from './common';
import {DisputeReason, DisputeStatus,} from "../models";
import { questSchema } from "./quest";
import {adminSchema} from "./admin";
import {userShortSchema} from "./user";

export const disputeStatusSchema = Joi.string().max(255).valid(...Object.values(DisputeStatus)).default(DisputeStatus.pending).example(DisputeStatus.pending).label('DisputeStatusSchema');
export const disputeReasonSchema = Joi.string().max(255).valid(...Object.values(DisputeReason)).default(DisputeReason.anotherReason).example(DisputeReason.anotherReason).label('DisputeReasonSchema');
export const problemDescriptionSchema = Joi.string().example('The problem is...').label('ProblemDescriptionSchema');
export const adminDecisionSchema = Joi.string().example('Decision is...').label('AdminDecisionSchema');
export const disputeNumberSchema = Joi.number().example('123').label('DisputeNumberSchema');

export const disputeSchema = Joi.object({
  id: idSchema,
  disputeNumber: disputeNumberSchema,
  openDisputeUserId: idSchema,
  opponentUserId: idSchema,
  resolvedByAdminId: idSchema,
  questId: idSchema,
  openDisputeUser: userShortSchema,
  opponentUser: userShortSchema,
  resolvedByAdmin: adminSchema,
  quest: questSchema,
  status: disputeStatusSchema,
  reason: disputeReasonSchema,
  problem: problemDescriptionSchema,
  decision: adminDecisionSchema,
  resolveAt: isoDateSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label("DisputeSchema");

export const disputesSchema = Joi.array().items(disputeSchema).label('Disputes');

export const disputesQuerySchema = Joi.object({
  offset: offsetSchema,
  limit: limitSchema,
}).label('DisputesQuery');
