"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wqtWbnbSwapEventsSchema = exports.wqtWbnbSwapEventSchema = exports.accountAddressSchema = exports.coinAmountSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
exports.coinAmountSchema = Joi.string().example("281231").label("CoinAmount");
exports.accountAddressSchema = Joi.string().example("0xke2083852Ccf274D48E149F99c80a5c742693418").label("AccountAddressSchema");
exports.wqtWbnbSwapEventSchema = Joi.object({
    blockNumber: common_1.blockNumberSchema,
    totalUSD: exports.coinAmountSchema,
    amount0In: exports.coinAmountSchema,
    amount0Out: exports.coinAmountSchema,
    amount1In: exports.coinAmountSchema,
    amount1Out: exports.coinAmountSchema,
    to: exports.accountAddressSchema,
    timestamp: common_1.timestampSchema,
    transactionHash: common_1.transactionHashSchema,
}).label('WqtWbnbSwapEvent');
exports.wqtWbnbSwapEventsSchema = Joi.array().items(exports.wqtWbnbSwapEventSchema).label('WqtWbnbSwapEvents');
