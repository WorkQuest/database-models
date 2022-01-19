"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
exports.coinAmountSchema = Joi.string().example("281231").label("CoinAmount");
exports.accountAddressSchema = Joi.string().example("0xke2083852Ccf274D48E149F99c80a5c742693418").label("AccountAddressSchema");
exports.wqtWbnbSwapEventSchema = Joi.object({
    id: common_1.numericIdSchema,
    blockNumber: common_1.blockNumberSchema,
    totalUSD: exports.coinAmountSchema,
    bnbAmountIn: exports.coinAmountSchema,
    bnbAmountOut: exports.coinAmountSchema,
    wqtAmountIn: exports.coinAmountSchema,
    wqtAmountOut: exports.coinAmountSchema,
    account: exports.accountAddressSchema,
    timestamp: common_1.timestampSchema,
    transactionHash: common_1.transactionHashSchema,
}).label('WqtWbnbSwapEvent');
exports.wqtWbnbSwapEventsSchema = Joi.array().items(exports.wqtWbnbSwapEventSchema).label('WqtWbnbSwapEvents');
