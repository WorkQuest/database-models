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
const common_1 = require("./common");
exports.savingProductEventSchema = Joi.object({
    blockNumber: common_1.blockNumberSchema,
    transactionHash: common_1.transactionHashSchema,
    user: common_1.accountAddressSchema,
    amount: common_1.coinAmountSchema,
    timestamp: common_1.timestampSchema,
    event: Joi.string().example('Received'),
    network: Joi.string().example('workQuestDevNetwork')
}).label('SavingProductEvent');
