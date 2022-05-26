"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pensionFundsEventsScheme = exports.pensionFundEventsScheme = void 0;
const Joi = require("joi");
const common_1 = require("./common");
exports.pensionFundEventsScheme = Joi.object({
    blockNumber: common_1.blockNumberSchema,
    transactionHash: common_1.transactionHashSchema,
    user: common_1.accountAddressSchema,
    amount: common_1.coinAmountSchema,
    timestamp: common_1.timestampSchema,
}).label('PensionFundEvents');
exports.pensionFundsEventsScheme = Joi.array().items(exports.pensionFundEventsScheme).label('PensionFundsEvents');
