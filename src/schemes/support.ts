import * as Joi from "joi";
import { userEmailSchema } from "./user";
import { idSchema } from "./common";

export const titleSupportSchema = Joi.string().example('New support post').label('TitleSupport');
export const descriptionSupportSchema = Joi.string().example('New support description in the post').label('DescriptionSupport');
export const supportTicketSchema = Joi.number().example(725212).label('SupportTicket')

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
}).label('SupportPostResponse');
