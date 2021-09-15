"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenDayWQTSchema = exports.tokenDayContract = exports.swapWQTSchema = exports.liquiditySwapSchema = exports.pairContractSchema = exports.timestampContractSchema = exports.pairTokenInfoContractSchema = exports.amountContractSchema = exports.addressContractSchema = void 0;
const Joi = require("joi");
exports.addressContractSchema = Joi.string().example('0xe7489ba661e0487669a685d76f4ee978e931dec9').label('Address');
exports.amountContractSchema = Joi.number().min(0).example(19494.677122626837340762).label('Amount');
exports.pairTokenInfoContractSchema = Joi.string().example('WQT').label('AmountType');
exports.timestampContractSchema = Joi.date().timestamp('unix').example(1631568392).label('TimeStamp');
exports.pairContractSchema = Joi.object({
    token0: exports.pairTokenInfoContractSchema,
    token1: exports.pairTokenInfoContractSchema,
}).label('PairContractSchema');
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
exports.tokenDayContract = Joi.object({
    dailyVolumeETH: exports.amountContractSchema,
    dailyVolumeToken: exports.amountContractSchema,
    dailyVolumeUSD: exports.amountContractSchema,
    date: exports.timestampContractSchema,
    id: exports.addressContractSchema,
    priceUSD: exports.amountContractSchema,
    totalLiquidityETH: exports.amountContractSchema,
    totalLiquidityToken: exports.amountContractSchema,
    totalLiquidityUSD: exports.amountContractSchema,
}).label('TokenDayContract');
exports.tokenDayWQTSchema = Joi.array().items(exports.tokenDayContract).label('TokenDayWQTSchema');
