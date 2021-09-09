import * as Joi from 'joi';
import {idSchema} from './common';

export const ratingStatisticReviewCountSchema = Joi.number().example(3).label('ReviewCount');
export const ratingStatisticAverageMarkSchema = Joi.number().example(3.5).label('AverageMark');

export const ratingStatisticSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  reviewCount: ratingStatisticReviewCountSchema,
  averageMark: ratingStatisticAverageMarkSchema,
}).label('RatingStatistic');
