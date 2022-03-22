"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("joi"));
exports.contractAddressSchema = Joi.string().example('0xe7489ba661e0487669a685d76f4ee978e931dec9').label('ContractAddress');
exports.contractAmountSchema = Joi.number().min(0).example(19494.677122626837340762).label('ContractAmount');
exports.contractSymbolSchema = Joi.string().example('WQT').label('ContractSymbol');
exports.contractTimestampSchema = Joi.date().timestamp('unix').example(1631568392).label('ContractTimeStamp');
exports.tokenOfPairSchema = Joi.object({
    symbol: exports.contractSymbolSchema,
}).label('LiquidityPair');
exports.contractPairSchema = Joi.object({
    token0: exports.tokenOfPairSchema,
    token1: exports.tokenOfPairSchema,
}).label('ContractPair');
exports.liquiditySwapSchema = Joi.object({
    amount0In: exports.contractAmountSchema,
    amount0Out: exports.contractAmountSchema,
    amount1In: exports.contractAmountSchema,
    amount1Out: exports.contractAmountSchema,
    amountUSD: exports.contractAmountSchema,
    pair: exports.contractPairSchema,
    timestamp: exports.contractTimestampSchema,
    to: exports.contractAddressSchema,
}).label('LiquiditySwap');
exports.swapWQTSchema = Joi.array().items(exports.liquiditySwapSchema).label('SwapWQT');
exports.contractTokenDay = Joi.object({
    id: exports.contractAddressSchema,
    dailyVolumeETH: exports.contractAmountSchema,
    dailyVolumeToken: exports.contractAmountSchema,
    dailyVolumeUSD: exports.contractAmountSchema,
    date: exports.contractTimestampSchema,
    priceUSD: exports.contractAmountSchema,
    totalLiquidityETH: exports.contractAmountSchema,
    totalLiquidityToken: exports.contractAmountSchema,
    totalLiquidityUSD: exports.contractAmountSchema,
}).label('TokenDayContract');
exports.tokensDayWQTSchema = Joi.array().items(exports.contractTokenDay).label('TokensDayWQT');
