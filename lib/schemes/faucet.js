"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.faucetStatusSchemas = Joi.string().example('true').label('FaucetStatus');
exports.transactionHashSchema = Joi.string().example('18vk40cc3er48fzs5ghqzxy88uq').label("TransactionHash");
exports.faucetSendWusdWqtResponseSchemas = Joi.object({
    txHash: exports.transactionHashSchema,
    status: exports.faucetStatusSchemas,
}).label('FaucetSendWusdWqt');
