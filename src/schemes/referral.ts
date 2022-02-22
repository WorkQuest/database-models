import Joi = require("joi")
import {accountAddressSchema, idSchema, limitSchema, offsetSchema, urlSchema} from "./common";
import {mediaContentTypeSchema, mediaHashSchema} from "./media";


export const referralWalletAddressSchema = Joi.string().label('WalletAddress').regex(/^0x[a-fA-F0-9]{40}$/).example('0x3e356dBeF7F3098407667a0f2aE6bC4ac9B69E0a');
export const referralAddressesSchema = Joi.array().items(referralWalletAddressSchema).label('arrayReferralAddressSchema');

export const referralAddAffiliatesSchemas = Joi.object({
  v: accountAddressSchema,
  r: accountAddressSchema,
  s: accountAddressSchema,
  referral: referralAddressesSchema
}).label('ReferralAddAffiliates');
