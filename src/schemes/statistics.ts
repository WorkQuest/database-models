import * as Joi from "joi";
import {idSchema} from "./common";
import {RatingStatus} from "../models";

/** Chat Statistic */

export const chatStatisticUnreadCountMessagesSchema = Joi.number().min(0).label('UnreadCountMessages');

export const chatsStatisticSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  unreadCountChats: chatStatisticUnreadCountMessagesSchema,
});


/** Quest Statistic */

export const completedSchema = Joi.number().example(25).label('CompletedQuests');
export const openedSchema = Joi.number().example(27).label('OpenedQuests');

export const questsStatisticSchema = Joi.object({
  completed: completedSchema,
  opened: openedSchema,
}).label('QuestsStatistic');


/** Rating Statistic */

export const ratingStatisticReviewCountSchema = Joi.number().example(3).label('ReviewCount');
export const ratingStatisticAverageMarkSchema = Joi.number().example(3.5).label('AverageMark');
export const ratingStatusSchema = Joi.string().valid(...Object.values(RatingStatus)).example(RatingStatus.topRanked).label("RatingStatus");

export const ratingStatusesSchema = Joi.array().items(ratingStatusSchema).label('RatingStatuses');

export const ratingStatisticSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  reviewCount: ratingStatisticReviewCountSchema,
  averageMark: ratingStatisticAverageMarkSchema,
  status: ratingStatusSchema,
}).label('RatingStatistic');


/** Common Statistic */

export const userStatisticsSchema = Joi.object({
  chatsStatistic: chatsStatisticSchema,
  questsStatistic: questsStatisticSchema,
  ratingStatistic: ratingStatisticSchema
}).label('UserStatistics');
