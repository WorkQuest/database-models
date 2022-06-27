import * as Joi from 'joi';
import {
  accountAddressSchema,
  blockNumberSchema,
  coinAmountSchema,
  timestampSchema,
  transactionHashSchema
} from "./common";

export const savingProductEventSchema = Joi.object({
  blockNumber: blockNumberSchema,
  transactionHash: transactionHashSchema,
  user: accountAddressSchema,
  amount: coinAmountSchema,
  timestamp: timestampSchema,
  event: Joi.string().example('Received'),
  network: Joi.string().example('workQuestDevNetwork')
}).label('SavingProductEvent');