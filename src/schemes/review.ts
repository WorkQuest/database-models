import * as Joi from "joi";
import {idSchema, isoDateSchema} from './common';
import {userShortSchema} from "./user";

export const reviewMessageSchema = Joi.string().example('Hello, I need this job').default('').label('Message');
export const reviewMarkSchema = Joi.number().min(1).max(5).label('Mark');

export const reviewSchema = Joi.object({
  reviewId: idSchema,
  questId: idSchema,
  fromUserId: idSchema,
  toUserId: idSchema,
  message: reviewMessageSchema,
  mark: reviewMarkSchema,
  fromUserOnWq: userShortSchema,
  createdAt: isoDateSchema,
}).label('ReviewSchema');

export const reviewsSchema = Joi.array().items(reviewSchema).label('Reviews');
