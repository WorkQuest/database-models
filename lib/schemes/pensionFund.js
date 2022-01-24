"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
exports.accountAddressSchema = Joi.string().example("0xke2083852Ccf274D48E149F99c80a5c742693418").label("AccountAddress");
exports.pensionFundEventsScheme = Joi.object({
    blockNumber: common_1.blockNumberSchema,
    transactionHash: common_1.transactionHashSchema,
    user: common_1.coinAmountSchema,
    amount: common_1.coinAmountSchema,
    timestamp: common_1.timestampSchema,
}).label('PensionFundEvents');
exports.pensionFundsEventsScheme = Joi.array().items(exports.pensionFundEventsScheme).label('PensionFundsEvents');
