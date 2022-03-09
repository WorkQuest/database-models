import Joi = require("joi");
import {
  timestampSchema,
  coinAmountSchema,
  blockNumberSchema,
  accountAddressSchema,
  transactionHashSchema,
} from "./common";

export const pensionFundEventsScheme = Joi.object({
  blockNumber: blockNumberSchema,
  transactionHash: transactionHashSchema,
  user: accountAddressSchema,
  amount: coinAmountSchema,
  timestamp: timestampSchema,
}).label('PensionFundEvents');

export const pensionFundsEventsScheme = Joi.array().items(pensionFundEventsScheme).label('PensionFundsEvents');
