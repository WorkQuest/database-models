import * as Joi from "joi";
import {Priority, RatingStatus} from "../models";
import {countSchema, idSchema, timeInSecondSchema} from "./common";

export const statisticAverageMark = Joi.number().example(3.5).label('StatisticAverageMark');


/** Chat Statistic */

export const chatsStatisticSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  unreadCountChats: countSchema,
});


/** Quest Statistic */

export const questsStatisticSchema = Joi.object({
  completed: countSchema,
  opened: countSchema,
}).label('QuestsStatistic');


/** Rating Statistic */

export const userRatingStatusSchema = Joi.number().valid(...Object.keys(RatingStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(RatingStatus.noStatus).label('RatingStatus');
export const userRatingStatusesSchema = Joi.array().items(userRatingStatusSchema).label('UserStatisticRatingStatuses');

export const userRatingStatisticSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  reviewCount: countSchema,
  averageMark: statisticAverageMark,
  status: userRatingStatusSchema,
}).label('RatingStatistic');


/** Common User Statistic */

export const userStatisticsSchema = Joi.object({
  chatsStatistic: chatsStatisticSchema,
  questsStatistic: questsStatisticSchema,
  ratingStatistic: userRatingStatisticSchema,
}).label('UserStatistics');


/** Admin Statistic */

export const adminQuestDisputesStatisticSchema = Joi.object({
  id: idSchema,
  adminId: idSchema,
  reviewCount: countSchema,
  averageMark: statisticAverageMark,
  resolvedQuestDisputes: countSchema,
  averageResolutionTimeInSeconds: timeInSecondSchema,
}).label('AdminQuestDisputesStatistic');
