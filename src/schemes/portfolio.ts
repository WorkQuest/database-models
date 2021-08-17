import * as Joi from "joi";
import {mediaIdsSchema} from "./media";
import {idSchema, isoDateSchema} from './common';
import {userFirstNameSchema, userLastNameSchema} from "./user";

const portfolioIdSchema = idSchema.label('PortfolioId');
const userIdSchema = idSchema.label("UserId");
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

export const userPortfolioShortSchema = Joi.object({
  id: userIdSchema,
  avatarId: mediaIdsSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
})

export const portfoliosSchema = Joi.array().items(portfolioSchema).label('Portfolios');
