"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
exports.accountAddressSchema = Joi.string().example("0xke2083852Ccf274D48E149F99c80a5c742693418").label("AccountAddress");
exports.wqtWbnbSwapEventSchema = Joi.object({
    blockNumber: common_1.blockNumberSchema,
    amountUSD: common_1.coinAmountSchema,
    amount0In: common_1.coinAmountSchema,
    amount0Out: common_1.coinAmountSchema,
    amount1In: common_1.coinAmountSchema,
    amount1Out: common_1.coinAmountSchema,
    to: exports.accountAddressSchema,
    timestamp: common_1.timestampSchema,
    transactionHash: common_1.transactionHashSchema,
}).label('WqtWbnbSwapEvent');
exports.wqtWbnbSwapEventsSchema = Joi.array().items(exports.wqtWbnbSwapEventSchema).label('WqtWbnbSwapEvents');
