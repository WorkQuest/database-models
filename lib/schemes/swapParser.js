"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
exports.coinAmountSchema = Joi.string().example("281231").label("CoinAmount");
exports.accountAddressSchema = Joi.string().example("0xke2083852Ccf274D48E149F99c80a5c742693418").label("AccountAddressSchema");
exports.swapParserSchema = Joi.object({
    id: common_1.idSchema,
    blockNumber: common_1.blockNumberSchema,
    totalUSD: exports.coinAmountSchema,
    bnbAmountIn: exports.coinAmountSchema,
    bnbAmountOut: exports.coinAmountSchema,
    wqtAmountIn: exports.coinAmountSchema,
    wqtAmountOut: exports.coinAmountSchema,
    account: exports.accountAddressSchema,
    timestamp: common_1.timestampSchema,
}).label('SwapParser');
