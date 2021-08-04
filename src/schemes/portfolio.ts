import * as Joi from "joi";
import {mediaIdsSchema} from "./media";
import {idSchema, isoDateSchema} from './common';

const portfolioIdSchema = idSchema.label('PortfolioId');
export const portfolioTitleSchema = Joi.string().example('Title...').label('Title');
export const portfolioDescriptionSchema = Joi.string().example('Description..').label('Description');

export const portfolioSchema = Joi.object({
  id: portfolioIdSchema,
  title: portfolioTitleSchema,
  description: portfolioDescriptionSchema,
  medias: mediaIdsSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label('Portfolio');

export const portfoliosSchema = Joi.array().items(portfolioSchema).label('Portfolios');
