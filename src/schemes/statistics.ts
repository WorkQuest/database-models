import * as Joi from "joi";
import {questsStatisticSchema} from "./questsStatistic";
import {ratingStatisticSchema} from "./ratingStatistic";
import {idSchema} from "./common";


export const chatStatisticUnreadCountMessagesSchema = Joi.number().min(0).label('UnreadCountMessages');

export const chatsStatisticSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  unreadChats: chatStatisticUnreadCountMessagesSchema,
});

export const userStatisticsSchema = Joi.object({
  chatsStatistic: chatsStatisticSchema,
  questsStatistic: questsStatisticSchema,
  ratingStatistic: ratingStatisticSchema
}).label('UserStatistics');
