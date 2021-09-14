"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.addressContractSchema = Joi.string().example('0xe7489ba661e0487669a685d76f4ee978e931dec9');
exports.amountContractSchema = Joi.number().min(0).example(19494.677122626837340762);
exports.pairTokenInfoContractSchema = Joi.string().example('WQT');
exports.timestampContractSchema = Joi.date().timestamp('unix').example(1631568392);
exports.pairContractSchema = Joi.object({
    token0: exports.pairTokenInfoContractSchema,
    token1: exports.pairTokenInfoContractSchema,
});
exports.liquiditySwapSchema = Joi.object({
    amount0In: exports.amountContractSchema,
    amount0Out: exports.amountContractSchema,
    amount1In: exports.amountContractSchema,
    amount1Out: exports.amountContractSchema,
    amountUSD: exports.amountContractSchema,
    pair: exports.pairContractSchema,
    timestamp: exports.timestampContractSchema,
    to: exports.addressContractSchema,
}).label('LiquiditySwapSchema');
exports.swapWQTSchema = Joi.array().items(exports.liquiditySwapSchema).label('SwapWQTSchema');
