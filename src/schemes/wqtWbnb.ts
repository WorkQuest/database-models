import Joi = require("joi");
import {
  timestampSchema,
  coinAmountSchema,
  blockNumberSchema,
  accountAddressSchema,
  transactionHashSchema,
} from "./common";

export const wqtSwapEventSchema = Joi.object({
  blockNumber: blockNumberSchema,
  amountUSD: coinAmountSchema,
  amount0In: coinAmountSchema,
  amount0Out: coinAmountSchema,
  amount1In: coinAmountSchema,
  amount1Out: coinAmountSchema,
  to: accountAddressSchema,
  timestamp: timestampSchema,
  transactionHash: transactionHashSchema,
}).label('WqtWbnbSwapEvent');

export const wqtSwapEventsSchema = Joi.array().items(wqtSwapEventSchema).label('WqtWbnbSwapEvents');
