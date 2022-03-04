"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
const user_1 = require("./user");
exports.referralProgramReferralStatusSchema = Joi.string().valid(...Object.values(models_1.ReferralStatus)).example(models_1.ReferralStatus.Created).label('ReferralProgramReferralStatus');
exports.referralProgramRewardStatusSchema = Joi.string().valid(...Object.values(models_1.RewardStatus)).example(models_1.RewardStatus.Paid).label('ReferralProgramRewardStatus');
exports.referralProgramUserAffiliatesScheme = Joi.object({
    v: common_1.accountAddressSchema,
    r: common_1.accountAddressSchema,
    s: common_1.accountAddressSchema,
    referral: common_1.accountAddressesSchema,
}).label('ReferralUserAffiliates');
exports.referralProgramAffiliateShortScheme = Joi.object({
    affiliateUserId: common_1.idSchema,
    referralProgramId: common_1.idSchema,
    referralStatus: exports.referralProgramReferralStatusSchema,
    rewardStatus: exports.referralProgramRewardStatusSchema,
    user: user_1.userShortSchema
}).label('ReferralProgramAffiliateShort');
exports.referralProgramAffiliatesShortScheme = Joi.array().items(exports.referralProgramAffiliateShortScheme).label('ReferralProgramAffiliatesShort');
exports.referralUserAffiliatesSchema = Joi.object({
    paidRewards: common_1.coinAmountSchema,
    referralId: common_1.idSchema,
    count: common_1.countSchema,
    affiliates: exports.referralProgramAffiliatesShortScheme
}).label('ReferralProgramAffiliateShort');
