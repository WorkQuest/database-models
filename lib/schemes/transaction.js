"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionSwapWqtDataSchema = exports.transactionDisputeDataSchema = exports.transactionSchema = exports.transactionNetworkSchema = exports.transactionErrorSchema = exports.transactionStatusSchema = void 0;
const Joi = __importStar(require("joi"));
const common_1 = require("./common");
const models_1 = require("../models");
const quest_1 = require("./quest");
const bridge_1 = require("./bridge");
exports.transactionStatusSchema = Joi.number().valid(...Object.values(models_1.TransactionStatus)).example(models_1.TransactionStatus.Success).label('TransactionStatus');
exports.transactionErrorSchema = Joi.string().example('The error is...').label('TransactionError');
exports.transactionNetworkSchema = Joi.string().valid(...Object.values(models_1.BlockchainNetworks)).example(models_1.BlockchainNetworks.workQuestNetwork).label('TransactionNetwork');
exports.transactionSchema = Joi.object({
    hash: common_1.transactionHashSchema,
    from: common_1.accountAddressSchema,
    to: common_1.accountAddressSchema,
    blockNumber: common_1.blockNumberSchema,
    status: exports.transactionStatusSchema,
    amount: common_1.coinAmountSchema,
    gasUsed: common_1.coinAmountSchema,
    error: exports.transactionErrorSchema,
    network: exports.transactionNetworkSchema
}).label('Transaction');
exports.transactionDisputeDataSchema = Joi.object({
    disputeId: common_1.idSchema,
    transactionHashDisputeResolution: common_1.transactionHashSchema,
    decision: quest_1.questDisputeDecisionSchema,
    gasPriceAtMoment: common_1.coinAmountSchema,
    status: exports.transactionStatusSchema,
    error: exports.transactionErrorSchema,
    tx: exports.transactionSchema,
    dispute: quest_1.questDisputeSchema
}).label('TransactionDisputeData');
exports.transactionSwapWqtDataSchema = Joi.object({
    transactionHashTransmissionWqt: common_1.transactionHashSchema,
    txHashSwapInitialized: exports.transactionSchema,
    gasPriceAtMoment: common_1.coinAmountSchema,
    amount: common_1.coinAmountSchema,
    platformCommissionCoefficient: common_1.coinAmountSchema,
    status: exports.transactionStatusSchema,
    error: exports.transactionErrorSchema,
    tx: exports.transactionSchema,
    bridgeEvent: bridge_1.bridgeSwapEventSchema
}).label('TransactionSwapWqtData');
