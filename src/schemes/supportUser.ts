import * as Joi from "joi";
import { userEmailSchema, userShortSchema } from "./user";
import { idSchema, isoDateSchema, limitSchema, offsetSchema } from "./common";
import {PostedDecision, TicketStatus} from "../models";
import { adminSchema } from "./admin";

export const numberSupportTicketSchema = Joi.number().example(725212).label('NumberSupportTicket');
export const titleSupportTicketSchema = Joi.string().example('New support post').label('TitleSupportTicket');
export const descriptionSupportTicketSchema = Joi.string().example('New support description in the post').label('DescriptionSupportTicket');
export const statusSupportTicketSchema = Joi.number().valid(...Object.values(TicketStatus)).example(TicketStatus.Pending).label("StatusSupportTicket");
export const postedDecisionSupportTicketSchema = Joi.string().valid(...Object.values(PostedDecision)).example(PostedDecision.OnEmailWithTheAuthor).label("PostedDecisionSupportTicket");

export const supportTicketStatusesSchema = Joi.array().items(statusSupportTicketSchema).label('SupportTicketStatuses');

export const supportTicketSchema = Joi.object({
  id: idSchema,
  number: numberSupportTicketSchema,
  authorId: idSchema,
  replyToMail: userEmailSchema,
  title: titleSupportTicketSchema,
  description: descriptionSupportTicketSchema,
  status: statusSupportTicketSchema,
  decisionPostedIn: postedDecisionSupportTicketSchema,
  decisionDescription: descriptionSupportTicketSchema,
  takenAt: isoDateSchema,
  decidedAt: isoDateSchema,
  authorUser: userShortSchema,
  resolvedByAdmin: adminSchema,
}).label('UserSupportTicket');

export const supportTicketQuerySchema = Joi.object({
  limit: limitSchema,
  offset: offsetSchema,
  statuses: supportTicketStatusesSchema,
}).label('SupportTicketQuery')
