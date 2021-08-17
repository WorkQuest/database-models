import * as Joi from 'joi';
import {idSchema} from './common';

const ratingStatisticIdSchema = idSchema.label('RatingStatisticId');
const userIdSchema = idSchema.label('UserId');
export const ratingStatisticReviewCountSchema = Joi.number().example(3).label('ReviewCount');
export const ratingStatisticAverageMarkSchema = Joi.number().example(3.5).label('AverageMark');

export const ratingStatisticSchema = Joi.object({
  id: ratingStatisticIdSchema,
  userId: userIdSchema,
  reviewCount: ratingStatisticReviewCountSchema,
  averageMark: ratingStatisticAverageMarkSchema,
}).label('RatingStatistic');
