"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.referralProgramEventRewardClaimed = exports.affiliateSchema = exports.referralSchema = exports.referralRewardStatusSchema = exports.referralStatusSchema = void 0;
const Joi = __importStar(require("joi"));
const models_1 = require("../models");
const user_1 = require("./user");
const common_1 = require("./common");
exports.referralStatusSchema = Joi.string().valid(...Object.values(models_1.ReferralStatus)).example(models_1.ReferralStatus.Created).label('ReferralStatus');
exports.referralRewardStatusSchema = Joi.string().valid(...Object.values(models_1.RewardStatus)).example(models_1.RewardStatus.Paid).label('ReferralRewardStatus');
exports.referralSchema = Joi.object({
    id: common_1.idSchema,
    referralUserId: common_1.idSchema,
    affiliateId: common_1.idSchema,
    referralStatus: exports.referralStatusSchema,
    rewardStatus: exports.referralRewardStatusSchema,
    referralUser: user_1.userShortWithWalletSchema,
}).label('Referral');
exports.affiliateSchema = Joi.object({
    id: common_1.idSchema,
    affiliateUserId: common_1.idSchema,
    referralCodeId: common_1.idSchema,
    affiliateUser: user_1.userShortWithWalletSchema,
}).label('Affiliate');
exports.referralProgramEventRewardClaimed = Joi.object({
    blockNumber: common_1.blockNumberSchema,
    transactionHash: common_1.transactionHashSchema,
    affiliate: common_1.accountAddressSchema,
    amount: common_1.coinAmountSchema,
    timestamp: common_1.timestampSchema,
}).label('ReferralProgramEventRewardClaimed');
