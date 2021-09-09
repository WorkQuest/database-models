import * as Joi from "joi";
import {idSchema, idsSchema, isoDateSchema} from './common';
import {userShortSchema} from "./user";

export const portfolioTitleSchema = Joi.string().example('Title...').label('PortfolioTitle');
export const portfolioDescriptionSchema = Joi.string().example('Description..').label('PortfolioDescription');

export const portfolioSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  title: portfolioTitleSchema,
  description: portfolioDescriptionSchema,
  medias: idsSchema,
  user: userShortSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label('Portfolio');

export const portfoliosSchema = Joi.array().items(portfolioSchema).label('Portfolios');
