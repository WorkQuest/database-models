import * as Joi from "joi";
import { userEmailSchema } from "./user";

export const titleSupportSchema = Joi.string().example('New support post').label('TitleSupport');
export const descriptionSupportSchema =  Joi.string().example('New support description in the post').label('DescriptionSupport');

export const supportCreateSchema = Joi.object({
  email: userEmailSchema,
  title: titleSupportSchema,
  description: descriptionSupportSchema,
}).label('SupportCreate');
