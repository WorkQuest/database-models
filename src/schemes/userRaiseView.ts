import * as Joi from "joi";
import {idSchema, isoDateSchema} from "./common";
import {userShortSchema} from "./user";
import {
  UserRaiseType,
  UserRaiseStatus,
  UserRaiseDuration,
} from "../models";

export const userRaiseViewStatusSchema = Joi.number().valid(...Object.keys(UserRaiseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(UserRaiseStatus.Paid).label('UserRaiseViewStatus');
export const userRaiseViewDurationSchema = Joi.number().valid(...Object.keys(UserRaiseDuration).map(key => parseInt(key)).filter(key => !isNaN(key))).example(UserRaiseDuration.OneDay).label('UserRaiseViewDuration');
export const userRaiseViewTypeSchema = Joi.number().valid(...Object.values(UserRaiseType)).example(UserRaiseType.GoldPlus).label('UserRaiseViewType');

export const userRaiseViewSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  status: userRaiseViewStatusSchema,
  duration: userRaiseViewDurationSchema,
  type: userRaiseViewTypeSchema,
  endedAt: isoDateSchema,
  user: userShortSchema,
}).label('UserRaiseView');
