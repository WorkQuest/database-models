import * as Joi from "joi";
import {mediaIdsSchema} from "./media";
import {idSchema, isoDateSchema} from './common';
import {userShortSchema} from "./user";

const portfolioIdSchema = idSchema.label('PortfolioId');
const userIdSchema = idSchema.label("UserId");
export const portfolioTitleSchema = Joi.string().example('Title...').label('Title');
export const portfolioDescriptionSchema = Joi.string().example('Description..').label('Description');

export const portfolioSchema = Joi.object({
  id: portfolioIdSchema,
  userId: userIdSchema,
  title: portfolioTitleSchema,
  description: portfolioDescriptionSchema,
  medias: mediaIdsSchema,
  user: userShortSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label('Portfolio');

export const portfoliosSchema = Joi.array().items(portfolioSchema).label('Portfolios');
