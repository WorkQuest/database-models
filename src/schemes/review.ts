import * as Joi from "joi";
import {idSchema, isoDateSchema} from './common';

const reviewIdSchema = idSchema.label('ReviewId');
const questIdSchema = idSchema.label('QuestId');
const fromUserIdSchema = idSchema.label('FromUserId');
const toUserIdSchema = idSchema.label('ToUserId');
export const reviewMessageSchema = Joi.string().example('Hello, I need this job').default('').label('Message');
export const reviewMarkSchema = Joi.number().min(1).max(5).label('Mark');

export const reviewSchema = Joi.object({
  reviewId: reviewIdSchema,
  questId: questIdSchema,
  fromUserId: fromUserIdSchema,
  toUserId: toUserIdSchema,
  message: reviewMessageSchema,
  mark: reviewMarkSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label('Review');

export const reviewsSchema = Joi.array().items(reviewSchema).label('Reviews');
