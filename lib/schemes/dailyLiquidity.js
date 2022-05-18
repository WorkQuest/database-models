"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
exports.daySinceEpochBeginningSchema = Joi.string().example('2456').label('DaySinceEpochBeginning');
exports.poolSchema = Joi.string().example("281401").label("Pools");
exports.dailyLiquidityWqtWbnbSchema = Joi.object({
    daySinceEpochBeginning: exports.daySinceEpochBeginningSchema,
    date: common_1.timestampSchema,
    blockNumber: common_1.blockNumberSchema,
    bnbPool: exports.poolSchema,
    wqtPool: exports.poolSchema,
    usdPriceBNB: exports.poolSchema,
    usdPriceWQT: exports.poolSchema,
    reserveUSD: exports.poolSchema,
}).label('DailyLiquidityWqtWbnb');
exports.dailyLiquidityWqtWethSchema = Joi.object({
    daySinceEpochBeginning: exports.daySinceEpochBeginningSchema,
    date: common_1.timestampSchema,
    blockNumber: common_1.blockNumberSchema,
    ethPool: exports.poolSchema,
    wqtPool: exports.poolSchema,
    usdPriceBNB: exports.poolSchema,
    usdPriceWQT: exports.poolSchema,
    reserveUSD: exports.poolSchema,
}).label('DailyLiquidityWqtWeth');
