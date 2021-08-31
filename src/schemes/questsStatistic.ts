import * as Joi from "joi";
import {idSchema} from "./common";

export const completedSchema = Joi.number().example(25).label('CompletedQuestsSchema');
export const openedSchema = Joi.number().example(27).label('OpenedQuestsSchema');

export const questsStatisticSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  completed: completedSchema,
  opened: openedSchema
}).label('questsStatisticSchema');
