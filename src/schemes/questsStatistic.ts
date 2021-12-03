import * as Joi from "joi";

export const completedSchema = Joi.number().example(25).label('CompletedQuests');
export const openedSchema = Joi.number().example(27).label('OpenedQuests');

export const questsStatisticSchema = Joi.object({
  completed: completedSchema,
  opened: openedSchema,
}).label('QuestsStatistic');
