import * as Joi from "joi";
import {idSchema, userRaiseTypeSchema} from "./common";
import {UserRaiseDuration, UserRaiseStatus} from "../models";
import {userShortSchema} from "./user";

export const userRaiseStatusSchema = Joi.number().valid(...Object.keys(UserRaiseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(UserRaiseStatus.Unpaid).label('UserRaiseStatus');
export const userRaiseDurationSchema = Joi.number().valid(...Object.keys(UserRaiseDuration).map(key => parseInt(key)).filter(key => !isNaN(key))).example(UserRaiseDuration.OneDay).label('UserRaiseDuration');
export const userRaisePayAmountSchema = Joi.number().example(10).label('QuestRaisePayAmount');

export const userRaiseViewSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  status: userRaiseStatusSchema,
  duration: userRaiseDurationSchema,
  type: userRaiseTypeSchema,
  user: userShortSchema,
}).default({}).label('UserRaiseView');
