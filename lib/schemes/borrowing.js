"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowingSchemaWithEvents = exports.borrowingSchema = exports.borrowingBorrowedOnlyTimestampSchema = exports.borrowingRefundedEventShortArray = exports.borrowingRefundedEventShortSchema = exports.borrowingStatusSchema = exports.borrowingNonceIdSchema = exports.borrowingSymbolSchema = exports.borrowingCreditSchema = exports.borrowingCollateralSchema = exports.borrowingTermSchema = void 0;
const Joi = __importStar(require("joi"));
const common_1 = require("./common");
const models_1 = require("../models");
const wallet_1 = require("./wallet");
exports.borrowingTermSchema = Joi.number().example(30).label('BorrowingTerm');
exports.borrowingCollateralSchema = Joi.string().regex(/^\d+$/).label('BorrowingCollateral');
exports.borrowingCreditSchema = Joi.string().regex(/^\d+$/).label('BorrowingCredit');
exports.borrowingSymbolSchema = Joi.string().example('WQT').label('BorrowingSymbol');
exports.borrowingNonceIdSchema = Joi.string().example("65464546452165556432245623").label('BorrowingNonceId');
exports.borrowingStatusSchema = Joi.number().valid(...Object.keys(models_1.BorrowingStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.BorrowingStatus.Pending).label("BorrowingStatus");
exports.borrowingRefundedEventShortSchema = Joi.object({
    amount: exports.borrowingCreditSchema,
    timestamp: common_1.timestampSchema,
    borrower: wallet_1.walletAddressSchema,
    transactionHash: common_1.transactionHashSchema
}).label('BorrowingRefundedEventShort');
exports.borrowingRefundedEventShortArray = Joi.array().items(exports.borrowingRefundedEventShortSchema).label('BorrowingRefundedEventShortArray');
exports.borrowingBorrowedOnlyTimestampSchema = Joi.object({
    timestamp: common_1.timestampSchema
}).label('BorrowingBorrowedOnlyTimestamp');
exports.borrowingSchema = Joi.object({
    id: common_1.idSchema,
    nonce: exports.borrowingNonceIdSchema,
    status: exports.borrowingStatusSchema,
    userId: common_1.idSchema,
    term: exports.borrowingTermSchema,
    collateral: exports.borrowingCollateralSchema,
    creditAmount: exports.borrowingCreditSchema,
    remainingCredit: exports.borrowingCreditSchema,
    symbol: exports.borrowingSymbolSchema,
    updatedAt: common_1.isoDateSchema,
    createdAt: common_1.isoDateSchema
}).label('Borrowing');
exports.borrowingSchemaWithEvents = Joi.object({
    id: common_1.idSchema,
    nonce: exports.borrowingNonceIdSchema,
    status: exports.borrowingStatusSchema,
    userId: common_1.idSchema,
    term: exports.borrowingTermSchema,
    collateral: exports.borrowingCollateralSchema,
    creditAmount: exports.borrowingCreditSchema,
    remainingCredit: exports.borrowingCreditSchema,
    symbol: exports.borrowingSymbolSchema,
    refundedEvents: exports.borrowingRefundedEventShortArray,
    borrowedEvent: exports.borrowingBorrowedOnlyTimestampSchema
}).label('BorrowingSchemaWithEvents');
