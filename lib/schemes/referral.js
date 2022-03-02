"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
exports.referralAddAffiliatesSchema = Joi.object({
    v: common_1.accountAddressSchema,
    r: common_1.accountAddressSchema,
    s: common_1.accountAddressSchema,
    referral: common_1.accountAddressesSchema,
}).label('ReferralAddAffiliates');