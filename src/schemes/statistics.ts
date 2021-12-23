import * as Joi from "joi";
import {chatsStatisticSchema} from "./chat";
import {questsStatisticSchema} from "./questsStatistic";
import {ratingStatisticSchema} from "./ratingStatistic";


export const userStatistics = {
  chatsStatistic: chatsStatisticSchema,
  questsStatistic: questsStatisticSchema,
  ratingStatistic: ratingStatisticSchema
}
