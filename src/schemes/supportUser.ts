import * as Joi from "joi";
import {userEmailSchema} from "./user";
import {TicketDecision, TicketStatus} from "../models";
import {idSchema, isoDateSchema} from "./common";

export const numberSupportTicketSchema = Joi.number().example(725212).label('NumberSupportTicket');
export const titleSupportTicketSchema = Joi.string().example('New support post').label('TitleSupportTicket');
export const descriptionSupportTicketSchema = Joi.string().example('New support description in the post').label('DescriptionSupportTicket');
export const statusSupportTicketSchema = Joi.number().valid(...Object.values(TicketStatus)).example(TicketStatus.Pending).label("StatusSupportTicket");
export const decisionSupportTicketSchema = Joi.string().valid(...Object.values(TicketDecision)).example(TicketDecision.Pending).label("DecisionSupportTicket");

export const supportTicketSchema = Joi.object({
  id: idSchema,
  number: numberSupportTicketSchema,
  authorId: idSchema,
  replyToMail: userEmailSchema,
  title: titleSupportTicketSchema,
  description: descriptionSupportTicketSchema,
  status: statusSupportTicketSchema,
  decision: decisionSupportTicketSchema,
  completionAt: isoDateSchema,
}).label('SupportTicket');

// export const supportQuerySchema = Joi.object({
//   status: statusSupportTicketSchema,
//   limit: limitSchema,
//   offset: offsetSchema,
// })

