import * as Joi from "joi";
import {idSchema, questRaiseTypeScheme} from "./common";
import {QuestRaiseDuration, QuestRaiseStatus} from "../models";
import {questSchema} from "./quest";
import {userShortSchema} from "./user";
import {QuestRaiseType} from "../models/quest/types";

export const questRaiseStatusSchema = Joi.number().valid(...Object.keys(QuestRaiseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestRaiseStatus.Unpaid).label('QuestRaiseStatus');
export const questRaiseDurationSchema = Joi.number().valid(...Object.keys(QuestRaiseDuration).map(key => parseInt(key)).filter(key => !isNaN(key))).example(QuestRaiseDuration.OneDay).label('QuestRaiseDuration');

export const questRaiseViewSchema = Joi.object({
  id: idSchema,
  questId: idSchema,
  userId: idSchema,
  status: questRaiseStatusSchema,
  duration: questRaiseDurationSchema,
  type: questRaiseTypeScheme,
  quest: questSchema,
  user: userShortSchema,
}).default({}).label('QuestRaiseView');
