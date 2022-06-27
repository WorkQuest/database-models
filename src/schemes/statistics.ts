import * as Joi from "joi";
import {
  RatingStatus,
  MemberType,
  Priority
} from "../models";
import {
  idSchema,
  countSchema,
  percentSchema,
  timeInSecondSchema
} from "./common";

export const statisticAverageMark = Joi.number().example(3.5).label('StatisticAverageMark');
export const chatsStatisticTypeSchema = Joi.string().valid(...Object.values(MemberType)).example(MemberType.User).label("ChatsStatisticType");

/** Chat Statistic */

export const adminChatsStatisticSchema = Joi.object({
  id: idSchema,
  adminId: idSchema,
  type: chatsStatisticTypeSchema,
  unreadCountChats: countSchema,
});

export const userChatsStatisticSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  type: chatsStatisticTypeSchema,
  unreadCountChats: countSchema,
});


/** Quest Statistic */

export const questsStatisticSchema = Joi.object({
  completed: countSchema,
  opened: countSchema,
}).label('QuestsStatistic');


/** Rating Statistic */

export const userRatingStatusSchema = Joi.number().valid(...Object.keys(RatingStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(RatingStatus.NoStatus).label('RatingStatus');
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
  chatsStatistic: userChatsStatisticSchema,
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

export const disputeDecideStatisticSchema = Joi.object({
  AcceptWork: percentSchema,
  RejectWork: percentSchema,
  Rework: percentSchema
}).label('DisputeDecideStatistic');

export const reportEntityStatisticSchema = Joi.object({
  Decided: percentSchema,
  Rejected: percentSchema
}).label('ReportEntityStatistic');

export const reportStatisticSchema = Joi.object({
  User: reportEntityStatisticSchema,
  Quest: reportEntityStatisticSchema
}).label('ReportStatistic');

export const adminDisputeStatisticSchema = Joi.object({
  disputeDecideStatistic: disputeDecideStatisticSchema,
  reportStatistic: reportStatisticSchema,
  disputeStatistic: adminQuestDisputesStatisticSchema
}).label('AdminDisputeStatistic');

export const adminSupportStatisticSchema = Joi.object({
  Decided: countSchema,
  Rejected: countSchema,
  Pending: countSchema
}).label('SupportStatistic');