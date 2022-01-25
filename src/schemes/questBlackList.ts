import * as Joi from "joi";
import {idSchema} from "./common";

export const questBlockReasonSchema = Joi.string().example('Quest was blocked').label('QuestBlockReason');

export const questBlackListSchema = Joi.object({
  id: idSchema,
  adminId: idSchema,
  questId: idSchema,
  reason: questBlockReasonSchema,
}).label('QuestBlackList');
