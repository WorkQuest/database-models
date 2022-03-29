import * as Joi from 'joi';
import { idSchema, isoDateSchema } from "./common";
import { BorrowingStatus } from "../models";

export const borrowingTermSchema = Joi.number().example(30).label('BorrowingTerm');
export const borrowingCollateralSchema = Joi.string().regex(/^\d+$/).label('BorrowingCollateral');
export const borrowingCreditSchema = Joi.string().regex(/^\d+$/).label('BorrowingCredit');
export const borrowingSymbolSchema = Joi.string().example('WQT').label('BorrowingSymbol');
export const borrowingNonceIdSchema = Joi.string().example("65464546452165556432245623").label('BorrowingNonceId');
export const borrowingStatusSchema = Joi.number().valid(...Object.keys(BorrowingStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(BorrowingStatus.Pending).label("BorrowingStatus");

export const borrowingSchema = Joi.object({
  id: idSchema,
  nonce: borrowingNonceIdSchema,
  status: borrowingStatusSchema,
  userId: idSchema,
  term: borrowingTermSchema,
  collateral: borrowingCollateralSchema,
  creditAmount: borrowingCreditSchema,
  remainingCredit: borrowingCreditSchema,
  symbol: borrowingSymbolSchema,
  updatedAt: isoDateSchema,
  createdAt: isoDateSchema
}).label('Borrowing');

