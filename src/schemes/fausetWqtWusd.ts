import * as Joi from "joi";

export const faucetStatusSchemas = Joi.string().example('true').label('FaucetStatus');
export const transactionHashSchema = Joi.string().example('18vk40cc3er48fzs5ghqzxy88uq').label("TransactionHash");

export const faucetSendWusdWqtResponseSchemas = Joi.object({
  txHash: transactionHashSchema,
  status: faucetStatusSchemas,
}).label('FaucetSendWusdWqt');
