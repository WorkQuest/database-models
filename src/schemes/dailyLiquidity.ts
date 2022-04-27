import Joi = require("joi");
import {blockNumberSchema, idSchema, timestampSchema} from "./common";

export const daySinceEpochBeginningSchema = Joi.string().example('2456').label('DaySinceEpochBeginning');
export const poolSchema = Joi.string().example("281401").label("Pools");

export const dailyLiquidityWqtWbnbSchema = Joi.object({
  daySinceEpochBeginning: daySinceEpochBeginningSchema,
  date: timestampSchema,
  blockNumber: blockNumberSchema,
  bnbPool: poolSchema,
  wqtPool: poolSchema,
  usdPriceBNB: poolSchema,
  usdPriceWQT: poolSchema,
  reserveUSD: poolSchema,
}).label('DailyLiquidityWqtWbnb');

export const dailyLiquidityWqtWethSchema = Joi.object({
  daySinceEpochBeginning: daySinceEpochBeginningSchema,
  date: timestampSchema,
  blockNumber: blockNumberSchema,
  ethPool: poolSchema,
  wqtPool: poolSchema,
  usdPriceBNB: poolSchema,
  usdPriceWQT: poolSchema,
  reserveUSD: poolSchema,
}).label('DailyLiquidityWqtWeth');

