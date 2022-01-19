import Joi = require("joi");
import {blockNumberSchema, numericIdSchema, timestampSchema, transactionHashSchema} from "./common";
import {BlockchainNetworks, WorkPlace} from "../models";

export const coinAmountSchema = Joi.string().example("281231").label("CoinAmount");
export const accountAddressSchema = Joi.string().example("0xke2083852Ccf274D48E149F99c80a5c742693418").label("AccountAddressSchema");
export const networkSchema = Joi.string().valid(...Object.values(BlockchainNetworks)).example(BlockchainNetworks.bscMainNetwork).label('Network');


export const wqtWbnbSwapEventSchema = Joi.object({
  id: numericIdSchema,
  blockNumber: blockNumberSchema,
  totalUSD: coinAmountSchema,
  bnbAmountIn: coinAmountSchema,
  bnbAmountOut: coinAmountSchema,
  wqtAmountIn: coinAmountSchema,
  wqtAmountOut: coinAmountSchema,
  account: accountAddressSchema, // TODO in common
  timestamp: timestampSchema,
  transactionHash: transactionHashSchema,
  network: networkSchema,
}).label('WqtWbnbSwapEvent');

export const wqtWbnbSwapEventsSchema = Joi.array().items(wqtWbnbSwapEventSchema).label('WqtWbnbSwapEvents');
