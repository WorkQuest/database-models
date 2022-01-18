import Joi = require("joi");
import {blockNumberSchema, numericIdSchema, timestampSchema} from "./common";

export const coinAmountSchema = Joi.string().example("281231").label("CoinAmount");
export const accountAddressSchema = Joi.string().example("0xke2083852Ccf274D48E149F99c80a5c742693418").label("AccountAddressSchema");

export const WqtWbnbSwapEvenSchema = Joi.object({
  id: numericIdSchema,
  blockNumber: blockNumberSchema,
  totalUSD: coinAmountSchema,
  bnbAmountIn: coinAmountSchema,
  bnbAmountOut: coinAmountSchema,
  wqtAmountIn: coinAmountSchema,
  wqtAmountOut: coinAmountSchema,
  account: accountAddressSchema,
  timestamp: timestampSchema,
}).label('SwapParser');

