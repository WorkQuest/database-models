import * as Joi from "joi";

export const contractAddressSchema = Joi.string().example('0xe7489ba661e0487669a685d76f4ee978e931dec9').label('ContractAddress');
export const contractAmountSchema = Joi.number().min(0).example(19494.677122626837340762).label('ContractAmount');
export const contractSymbolSchema = Joi.string().example('WQT').label('ContractSymbol');
export const contractTimestampSchema = Joi.date().timestamp('unix').example(1631568392).label('ContractTimeStamp');

export const tokenOfPairSchema = Joi.object({
  symbol: contractSymbolSchema,
}).label('LiquidityPair');

export const contractPairSchema = Joi.object({
  token0: tokenOfPairSchema,
  token1: tokenOfPairSchema,
}).label('ContractPair');

export const liquiditySwapSchema = Joi.object({
  amount0In: contractAmountSchema,
  amount0Out: contractAmountSchema,
  amount1In: contractAmountSchema,
  amount1Out: contractAmountSchema,
  amountUSD: contractAmountSchema,
  pair: contractPairSchema,
  timestamp: contractTimestampSchema,
  to: contractAddressSchema,
}).label('LiquiditySwap')

export const swapWQTSchema = Joi.array().items(liquiditySwapSchema).label('SwapWQT');

export const contractTokenDay = Joi.object({
  id: contractAddressSchema,
  dailyVolumeETH: contractAmountSchema,
  dailyVolumeToken: contractAmountSchema,
  dailyVolumeUSD: contractAmountSchema,
  date: contractTimestampSchema,
  priceUSD: contractAmountSchema,
  totalLiquidityETH: contractAmountSchema,
  totalLiquidityToken: contractAmountSchema,
  totalLiquidityUSD: contractAmountSchema,
}).label('TokenDayContract')

export const tokensDayWQTSchema = Joi.array().items(contractTokenDay).label('TokensDayWQT');
