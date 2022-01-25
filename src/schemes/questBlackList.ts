import * as Joi from "joi";
import {idSchema} from "./common";
import {BlackListStatus} from "../models";
import {questStatusSchema} from "./quest";

export const questBlockReasonSchema = Joi.string().example('Quest was blocked').label('QuestBlockReason');
export const questBlockStatusSchema = Joi.number().valid(...Object.keys(BlackListStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(BlackListStatus.Blocked).label('QuestBlockStatus');

export const questBlackListSchema = Joi.object({
  id: idSchema,
  adminId: idSchema,
  questId: idSchema,
  reason: questBlockReasonSchema,
  status: questBlockStatusSchema,
  previousQuestStatus: questStatusSchema,
}).label('QuestBlackList');
