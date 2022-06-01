import * as Joi from "joi";
import { userEmailSchema } from "./user";
import { idSchema, limitSchema, offsetSchema, timestampSchema } from "./common";
import { AdminSupportResolved, SupportStatus } from "../models";

export const titleSupportSchema = Joi.string().example('New support post').label('TitleSupport');
export const descriptionSupportSchema = Joi.string().example('New support description in the post').label('DescriptionSupport');
export const supportTicketSchema = Joi.number().example(725212).label('SupportTicket')
export const supportPostStatusSchema = Joi.number().valid(...Object.values(SupportStatus)).example(SupportStatus.Pending).label("SupportPostStatus");
export const supportPostDecisionSchema = Joi.string().valid(...Object.values(AdminSupportResolved)).example(AdminSupportResolved.Pending).label("SupportPostDecision");

export const supportCreateSchema = Joi.object({
  email: userEmailSchema,
  title: titleSupportSchema,
  description: descriptionSupportSchema,
}).label('SupportCreate');

export const supportPostResponseSchema = Joi.object({
  supportTicket: supportTicketSchema,
  authorId: idSchema,
  email: userEmailSchema,
  title: titleSupportSchema,
  description: descriptionSupportSchema,
  status: supportPostStatusSchema,
  decision: supportPostDecisionSchema
}).label('SupportPostResponse');

export const supportQuerySchema = Joi.object({
  status: supportPostStatusSchema,
  limit: limitSchema,
  offset: offsetSchema,
})

export const GetUserSupportTicketsResponseSchema = Joi.object({
  id: idSchema,
  number: supportTicketSchema,
  authorUserId: idSchema,
  resolvedByAdminId: idSchema,
  email: userEmailSchema,
  title: titleSupportSchema,
  description: descriptionSupportSchema,
  status: supportPostStatusSchema,
  decision: supportPostDecisionSchema,
  completionAt: timestampSchema
})
