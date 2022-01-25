import Joi = require("joi");
import {blockNumberSchema, coinAmountSchema, timestampSchema, transactionHashSchema} from "./common";

export const accountAddressSchema = Joi.string().example("0xke2083852Ccf274D48E149F99c80a5c742693418").label("AccountAddress");

export const pensionFundEventsScheme = Joi.object({
  blockNumber: blockNumberSchema,
  transactionHash: transactionHashSchema,
  user: coinAmountSchema,
  amount: coinAmountSchema,
  timestamp: timestampSchema,
}).label('PensionFundEvents');

export const pensionFundsEventsScheme = Joi.array().items(pensionFundEventsScheme).label('PensionFundsEvents');
