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
exports.faucetStatusSchemas = Joi.string().example('true').label('FaucetStatus');
exports.faucetSendWusdWqtResponseSchemas = Joi.object({
    txHash: common_1.transactionHashSchema,
    status: exports.faucetStatusSchemas,
}).label('FaucetSendWusdWqt');
