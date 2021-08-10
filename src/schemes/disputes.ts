import * as Joi from "joi";
import {
  idSchema
} from './common';
import {DisputeStatus, DisputeStatuses} from "../models/Disputes";

export const disputeStatusSchema = Joi.string().max(255).valid(...DisputeStatuses).default(DisputeStatus.active).example('active').label('DisputeStatusSchema');
export const problemDescriptionSchema = Joi.string().example('The problem is...').label('ProblemDescriptionSchema');
export const adminDecisionSchema = Joi.string().example('Decision is...').label('AdminDecisionSchema');


export const disputeSchema = Joi.object({
  id: idSchema,
  employerId: idSchema,
  workerId: idSchema,
  questId: idSchema,
  status: disputeStatusSchema,
  problem: problemDescriptionSchema,
  decision: adminDecisionSchema,
}).label("QuestSchema");

export const disputesSchema = Joi.array().items(disputeSchema).label('Disputes');

