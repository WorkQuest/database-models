import * as Joi from "joi";
import {MemberType, RatingStatus} from "../models";
import {countSchema, idSchema, timeInSecondSchema} from "./common";

export const statisticAverageMark = Joi.number().example(3.5).label('StatisticAverageMark');
export const chatsStatisticTypeSchema = Joi.string().valid(...Object.values(MemberType)).example(MemberType.User).label("ChatsStatisticType");

/** Chat Statistic */

export const chatsStatisticSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  adminId: idSchema,
  type: chatsStatisticTypeSchema,
  unreadCountChats: countSchema,
});


/** Quest Statistic */

export const questsStatisticSchema = Joi.object({
  completed: countSchema,
  opened: countSchema,
}).label('QuestsStatistic');


/** Rating Statistic */

export const userRatingStatusSchema = Joi.number().valid(...Object.values(RatingStatus)).example(RatingStatus.topRanked).label("UserStatisticRatingStatus");
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
