import * as Joi from "joi";
import {
  accountAddressSchema,
  accountAddressesSchema,
  coinAmountSchema,
  idSchema,
  countSchema,
  idsSchema
} from "./common";

export const referralAddAffiliatesSchema = Joi.object({
  v: accountAddressSchema,
  r: accountAddressSchema,
  s: accountAddressSchema,
  referral: accountAddressesSchema,
}).label('ReferralAddAffiliates');

export const referralProgramAffiliateShortSchema = Joi

export const referralProgramAffiliateFullUserSchema = Joi.object({
  paidRewards: coinAmountSchema,
  referralId: idSchema,
  count: countSchema,
  // affiliates:
})
