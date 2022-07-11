import * as Joi from 'joi';
import { accountAddressSchema, blockNumberSchema, coinAmountSchema, idSchema, transactionHashSchema } from "./common";
import { BlockchainNetworks, TransactionStatus } from "../models";
import { questDisputeDecisionSchema, questDisputeSchema } from "./quest";
import { bridgeSwapEventSchema } from "./bridge";

export const transactionStatusSchema = Joi.number().valid(...Object.values(TransactionStatus)).example(TransactionStatus.Success).label('TransactionStatus');
export const transactionErrorSchema = Joi.string().example('The error is...').label('TransactionError');
export const transactionNetworkSchema = Joi.string().valid(...Object.values(BlockchainNetworks)).example(BlockchainNetworks.workQuestNetwork).label('TransactionNetwork');

export const transactionSchema = Joi.object({
  hash: transactionHashSchema,
  from: accountAddressSchema,
  to: accountAddressSchema,
  blockNumber: blockNumberSchema,
  status: transactionStatusSchema,
  amount: coinAmountSchema,
  gasUsed: coinAmountSchema,
  error: transactionErrorSchema,
  network: transactionNetworkSchema
}).label('Transaction');

export const transactionDisputeDataSchema = Joi.object({
  disputeId: idSchema,
  transactionHashDisputeResolution: transactionHashSchema,
  decision: questDisputeDecisionSchema,
  gasPriceAtMoment: coinAmountSchema,
  status: transactionStatusSchema,
  error: transactionErrorSchema,
  tx: transactionSchema,
  dispute: questDisputeSchema
}).label('TransactionDisputeData');

export const transactionSwapWqtDataSchema = Joi.object({
  transactionHashTransmissionWqt: transactionHashSchema,
  txHashSwapInitialized: transactionHashSchema,
  gasPriceAtMoment: coinAmountSchema,
  amount: coinAmountSchema,
  platformCommissionCoefficient: coinAmountSchema,
  status: transactionStatusSchema,
  error: transactionErrorSchema,
  tx: transactionSchema,
  bridgeEvent: bridgeSwapEventSchema
}).label('TransactionSwapWqtData');