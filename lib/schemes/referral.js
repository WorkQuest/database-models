"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
exports.referralWalletAddressSchema = Joi.string().label('WalletAddress').regex(/^0x[a-fA-F0-9]{40}$/).example('0x3e356dBeF7F3098407667a0f2aE6bC4ac9B69E0a');
exports.referralAddressesSchema = Joi.array().items(exports.referralWalletAddressSchema).label('arrayReferralAddressSchema');
exports.referralAffiliatesSchema = Joi.array().items(common_1.idSchema).label('referralAffiliatesSchema');
exports.referralAddAffiliatesSchemas = Joi.object({
    v: common_1.accountAddressSchema,
    r: common_1.accountAddressSchema,
    s: common_1.accountAddressSchema,
    referral: exports.referralAddressesSchema
}).label('ReferralAddAffiliates');
