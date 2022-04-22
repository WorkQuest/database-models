import * as Joi from "joi";
import { transactionHashSchema } from "./common";

export const faucetStatusSchemas = Joi.string().example('true').label('FaucetStatus');

export const faucetSendWusdWqtResponseSchemas = Joi.object({
  txHash: transactionHashSchema,
  status: faucetStatusSchemas,
}).label('FaucetSendWusdWqt');


