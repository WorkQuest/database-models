import * as Joi from "joi";
import {userEmailSchema} from "./user";
import {idSchema, isoDateSchema} from "./common";
import {PostedDecision, TicketStatus} from "../models";

export const numberSupportTicketSchema = Joi.number().example(725212).label('NumberSupportTicket');
export const titleSupportTicketSchema = Joi.string().example('New support post').label('TitleSupportTicket');
export const descriptionSupportTicketSchema = Joi.string().example('New support description in the post').label('DescriptionSupportTicket');
export const statusSupportTicketSchema = Joi.number().valid(...Object.values(TicketStatus)).example(TicketStatus.Pending).label("StatusSupportTicket");
export const postedDecisionSupportTicketSchema = Joi.string().valid(...Object.values(PostedDecision)).example(PostedDecision.OnEmailWithTheAuthor).label("PostedDecisionSupportTicket");

export const supportTicketSchema = Joi.object({
  id: idSchema,
  number: numberSupportTicketSchema,
  authorId: idSchema,
  replyToMail: userEmailSchema,
  title: titleSupportTicketSchema,
  description: descriptionSupportTicketSchema,
  status: statusSupportTicketSchema,
  decisionPostedIn: postedDecisionSupportTicketSchema,
  completionAt: isoDateSchema,
}).label('UserSupportTicket');
