import Joi = require("joi");
import {blockNumberSchema, timestampSchema, transactionHashSchema} from "./common";

export const coinAmountSchema = Joi.string().example("281231").label("CoinAmount");
export const accountAddressSchema = Joi.string().example("0xke2083852Ccf274D48E149F99c80a5c742693418").label("AccountAddressSchema");

export const wqtWbnbSwapEventSchema = Joi.object({
  blockNumber: blockNumberSchema,
  totalUSD: coinAmountSchema,
  amount0In: coinAmountSchema,
  amount0Out: coinAmountSchema,
  amount1In: coinAmountSchema,
  amount1Out: coinAmountSchema,
  to: accountAddressSchema, // TODO in common
  timestamp: timestampSchema,
  transactionHash: transactionHashSchema,
}).label('WqtWbnbSwapEvent');

export const wqtWbnbSwapEventsSchema = Joi.array().items(wqtWbnbSwapEventSchema).label('WqtWbnbSwapEvents');
