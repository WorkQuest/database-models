import DateExtension from '@joi/date';
import * as JoiImport from 'joi';
const Joi = JoiImport.extend(DateExtension);
import {
  idSchema, limitSchema, offsetSchema
} from './common';
import { DisputeStatus, DisputeStatuses } from "../models/Disputes";
import { questSchema } from "./quest";
import { userSchema } from "./user";

export const disputeStatusSchema = Joi.string().max(255).valid(...DisputeStatuses).default(DisputeStatus.pending).example('active').label('DisputeStatusSchema');
export const problemDescriptionSchema = Joi.string().example('The problem is...').label('ProblemDescriptionSchema');
export const adminDecisionSchema = Joi.string().example('Decision is...').label('AdminDecisionSchema');
export const disputeOpeningTimeSchema = Joi.date().format('YYYY-MM-DD HH:mm').example('2021-08-10 09:48').label('DisputeOpeningTimeSchema');
export const disputeNumberSchema = Joi.number().example('123').label('DisputeNumberSchema');

export const disputeSchema = Joi.object({
  id: idSchema,
  disputeNumber: disputeNumberSchema,
  openDisputeUserId: idSchema,
  opponentUserId: idSchema,
  questId: idSchema,
  openDisputeUser: userSchema,
  opponentUser: userSchema,
  quest: questSchema,
  status: disputeStatusSchema,
  problem: problemDescriptionSchema,
  decision: adminDecisionSchema,
}).label("QuestSchema");

export const disputesSchema = Joi.array().items(disputeSchema).label('Disputes');

export const disputesQuerySchema = Joi.object({
  offset: offsetSchema,
  limit: limitSchema,
}).label('DisputesQuery');
