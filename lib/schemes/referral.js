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
exports.referralProgramClaimedAndPaidEventNameSchema = Joi.string().valid('PaidReferral', 'RewardClaimed').example('RewardClaimed').label('ReferralProgramClaimedAndPaidEventName');
exports.referralProgramClaimedAndPaidEventSchema = Joi.object({
    referral: common_1.idSchema,
    affiliate: common_1.idSchema,
    blockNumber: common_1.blockNumberSchema,
    transactionHash: common_1.transactionHashSchema,
    amount: common_1.coinAmountSchema,
    timestamp: common_1.timestampSchema,
    event: exports.referralProgramClaimedAndPaidEventNameSchema
}).label('ReferralProgramClaimedAndPaidEvent');
