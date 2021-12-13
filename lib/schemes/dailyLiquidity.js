"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
exports.poolSchema = Joi.string().example("281401").label("PoolSchema");
exports.dailyLiquiditySchema = Joi.object({
    id: common_1.idSchema,
    timestamp: common_1.timestampSchema,
    blockNumber: common_1.blockNumberSchema,
    bnbPool: exports.poolSchema,
    wqtPool: exports.poolSchema,
    usdPriceBNB: exports.poolSchema,
    usdPriceWQT: exports.poolSchema,
    liquidityPoolUSD: exports.poolSchema,
}).label('DailyLiquidity');
