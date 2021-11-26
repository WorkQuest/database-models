import * as Joi from 'joi';
import {idSchema} from './common';
import {RatingStatus, UserRole} from "../models";

export const ratingStatisticReviewCountSchema = Joi.number().example(3).label('ReviewCount');
export const ratingStatisticAverageMarkSchema = Joi.number().example(3.5).label('AverageMark');
export const ratingStatusSchema = Joi.string().valid(...Object.values(RatingStatus)).example(RatingStatus.topRanked).label("RatingStatus");

  export const ratingStatisticSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  reviewCount: ratingStatisticReviewCountSchema,
  averageMark: ratingStatisticAverageMarkSchema,
  status: ratingStatusSchema,
}).label('RatingStatistic');
