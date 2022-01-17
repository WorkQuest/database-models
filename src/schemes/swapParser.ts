import Joi = require("joi");
import {idSchema, timestampSchema} from "./common";

export const coinAmountSchema = Joi.string().example("281231").label("CoinAmount");
export const accountAddressSchema = Joi.string().example("0xke2083852Ccf274D48E149F99c80a5c742693418").label("AccountAddressSchema");

export const swapParserSchema = Joi.object({
  id: idSchema,
  totalUSD: coinAmountSchema,
  bnbAmount: coinAmountSchema,
  wqtAmount: coinAmountSchema,
  account: accountAddressSchema,
  timestamp: timestampSchema,
}).label('SwapParser');

