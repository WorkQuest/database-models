import * as Joi from "joi";
import {idSchema} from "./common";
import {BlackListStatus} from "../models";
import {userStatusSchema} from "./user";

export const userBlockReasonSchema = Joi.string().example('User was blocked').label('UserBlockReason');
export const userBlockStatusSchema = Joi.number().valid(...Object.keys(BlackListStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(BlackListStatus.Blocked).label('UserBlockStatus');

export const userBlackListSchema = Joi.object({
  id: idSchema,
  adminId: idSchema,
  questId: idSchema,
  reason: userBlockReasonSchema,
  status: userBlockStatusSchema,
  previousQuestStatus: userStatusSchema,
}).label('UserBlackList');
