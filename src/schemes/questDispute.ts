import * as Joi from 'joi';
import {adminSchema} from "./admin";
import {userShortSchema} from "./user";
import {questSchema, questStatusSchema} from "./quest";
import {DisputeReason, DisputeStatus, QuestDispute} from "../models";
import {
  idSchema,
  countSchema,
  isoDateSchema,
} from './common';

export const questDisputeNumberSchema = Joi.number().example('123').label('DisputeNumber');
export const questDisputeStatusSchema = Joi.string().max(255).valid(...Object.values(DisputeStatus)).default(DisputeStatus.pending).example(DisputeStatus.pending).label('DisputeStatus');
export const questDisputeReasonSchema = Joi.string().max(255).valid(...Object.values(DisputeReason)).default(DisputeReason.anotherReason).example(DisputeReason.anotherReason).label('DisputeReason');
export const questDisputeProblemDescriptionSchema = Joi.string().example('The problem is...').label('ProblemDescription');
export const questDisputeDecisionDescriptionSchema = Joi.string().example('Decision is...').label('DecisionDescription');

export const questDisputeSchema = Joi.object({
  id: idSchema,
  questId: idSchema,
  openDisputeUserId: idSchema,
  opponentUserId: idSchema,
  assignedAdminId: idSchema,
  disputeNumber: questDisputeNumberSchema,
  status: questDisputeStatusSchema,
  openOnQuestStatus: questStatusSchema,
  reason: questDisputeReasonSchema,
  problemDescription: questDisputeProblemDescriptionSchema,
  decisionDescription: questDisputeDecisionDescriptionSchema,
  openDisputeUser: userShortSchema,
  opponentUser: userShortSchema,
  assignedAdmin: adminSchema,
  quest: questSchema,
  resolveAt: isoDateSchema,
  createdAt: isoDateSchema,
}).label("QuestDispute");

export const disputesSchema = Joi.array().items(questDisputeSchema).label('QuestDisputes');

export const questDisputesWithCountSchema = Joi.object({
  count: countSchema,
  disputes: questDisputeSchema,
}).label('QuestsForGetWithCount');
