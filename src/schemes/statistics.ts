import * as Joi from "joi";
import {chatsStatisticSchema} from "./chat";
import {questsStatisticSchema} from "./questsStatistic";
import {ratingStatisticSchema} from "./ratingStatistic";


export const userStatisticsSchema = Joi.object({
  chatsStatistic: chatsStatisticSchema,
  questsStatistic: questsStatisticSchema,
  ratingStatistic: ratingStatisticSchema
}).label('UserStatistics');
