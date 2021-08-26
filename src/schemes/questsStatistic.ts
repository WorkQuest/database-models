import * as Joi from "joi";
import {idSchema} from "./common";

export const completedQuestsSchema = Joi.number().example(25).label('CompletedQuestsSchema');
export const openedQuestsSchema = Joi.number().example(27).label('OpenedQuestsSchema');

export const questsStatisticSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  completedQuests: completedQuestsSchema,
  openedQuests: openedQuestsSchema
}).label('questsStatisticSchema');
