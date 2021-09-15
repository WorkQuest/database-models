import * as Joi from "joi";

export const addressContractSchema = Joi.string().example('0xe7489ba661e0487669a685d76f4ee978e931dec9').label('Address');
export const amountContractSchema = Joi.number().min(0).example(19494.677122626837340762).label('Amount');
export const pairTokenInfoContractSchema = Joi.string().example('WQT').label('AmountType');
export const timestampContractSchema = Joi.date().timestamp('unix').example(1631568392).label('TimeStamp');

export const pairContractSchema = Joi.object({
  token0: pairTokenInfoContractSchema,
  token1: pairTokenInfoContractSchema,
}).label('PairContractSchema')

export const liquiditySwapSchema = Joi.object({
  amount0In: amountContractSchema,
  amount0Out: amountContractSchema,
  amount1In: amountContractSchema,
  amount1Out: amountContractSchema,
  amountUSD: amountContractSchema,
  pair: pairContractSchema,
  timestamp: timestampContractSchema,
  to: addressContractSchema,
}).label('LiquiditySwapSchema')

export const swapWQTSchema = Joi.array().items(liquiditySwapSchema).label('SwapWQTSchema');

export const tokenDayContract = Joi.object({
  dailyVolumeETH: amountContractSchema,
  dailyVolumeToken: amountContractSchema,
  dailyVolumeUSD: amountContractSchema,
  date: timestampContractSchema,
  id: addressContractSchema,
  priceUSD: amountContractSchema,
  totalLiquidityETH: amountContractSchema,
  totalLiquidityToken: amountContractSchema,
  totalLiquidityUSD: amountContractSchema,
}).label('TokenDayContract')

export const tokenDayWQTSchema = Joi.array().items(tokenDayContract).label('TokenDayWQTSchema');
