"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wqtSwapEventsSchema = exports.wqtSwapEventSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
exports.wqtSwapEventSchema = Joi.object({
    blockNumber: common_1.blockNumberSchema,
    amountUSD: common_1.coinAmountSchema,
    amount0In: common_1.coinAmountSchema,
    amount0Out: common_1.coinAmountSchema,
    amount1In: common_1.coinAmountSchema,
    amount1Out: common_1.coinAmountSchema,
    to: common_1.accountAddressSchema,
    timestamp: common_1.timestampSchema,
    transactionHash: common_1.transactionHashSchema,
}).label('WqtWbnbSwapEvent');
exports.wqtSwapEventsSchema = Joi.array().items(exports.wqtSwapEventSchema).label('WqtWbnbSwapEvents');
