import Joi = require("joi");
import {blockNumberSchema, idSchema, timestampSchema} from "./common";

export const poolSchema = Joi.string().example("281401").label("PoolSchema");

export const dailyLiquidityWqtWbnbSchema = Joi.object({
  id: idSchema,
  date: timestampSchema,
  blockNumber: blockNumberSchema,
  bnbPool: poolSchema,
  wqtPool: poolSchema,
  usdPriceBNB: poolSchema,
  usdPriceWQT: poolSchema,
  reserveUSD: poolSchema,
}).label('DailyLiquidity');

export const dailyLiquidityWqtWethSchema = Joi.object({
  id: idSchema,
  date: timestampSchema,
  blockNumber: blockNumberSchema,
  ethPool: poolSchema,
  wqtPool: poolSchema,
  usdPriceBNB: poolSchema,
  usdPriceWQT: poolSchema,
  reserveUSD: poolSchema,
}).label('DailyLiquidity');

