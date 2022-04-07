import * as Joi from "joi";
import {idSchema, isoDateSchema} from "./common";
import {
  QuestRaiseType,
  QuestRaiseStatus,
  QuestRaiseDuration,
} from "../models/raiseView/types";

export const questRaiseTypeScheme = Joi.number().valid(...Object.values(QuestRaiseType)).example(QuestRaiseType.GoldPlus).label('QuestRaiseType');
export const questRaiseStatusSchema = Joi.number().valid(...Object.keys(QuestRaiseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestRaiseStatus.Paid).label('QuestRaiseStatus');
export const questRaiseDurationSchema = Joi.number().valid(...Object.keys(QuestRaiseDuration).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestRaiseDuration.OneDay).label('QuestRaiseDuration');
export const questRaisePayAmountSchema = Joi.number().example(10).label('QuestRaisePayAmount');

export const questRaiseViewSchema = Joi.object({
  id: idSchema,
  questId: idSchema,
  status: questRaiseStatusSchema,
  duration: questRaiseDurationSchema,
  type: questRaiseTypeScheme,
  endedAt: isoDateSchema,
}).label('QuestRaiseView');
