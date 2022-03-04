import * as Joi from "joi";
import {
  accountAddressSchema,
  accountAddressesSchema,
  coinAmountSchema,
  idSchema,
  countSchema,
} from "./common";
import {ReferralStatus, RewardStatus} from "../models";
import {userShortSchema} from "./user";

export const referralProgramReferralStatusSchema = Joi.string().valid(...Object.values(ReferralStatus)).example(ReferralStatus.Created).label('ReferralProgramReferralStatus');
export const referralProgramRewardStatusSchema = Joi.string().valid(...Object.values(RewardStatus)).example(RewardStatus.Paid).label('ReferralProgramRewardStatus');

export const referralProgramUserAffiliatesScheme = Joi.object({
  v: accountAddressSchema,
  r: accountAddressSchema,
  s: accountAddressSchema,
  referral: accountAddressesSchema,
}).label('ReferralUserAffiliates');

export const referralProgramAffiliateShortScheme = Joi.object({
  affiliateUserId: idSchema,
  referralProgramId: idSchema,
  referralStatus: referralProgramReferralStatusSchema,
  rewardStatus: referralProgramRewardStatusSchema,
  user: userShortSchema
}).label('ReferralProgramAffiliateShort')

export const referralProgramAffiliatesShortScheme = Joi.array().items(referralProgramAffiliateShortScheme).label('ReferralProgramAffiliatesShort');

export const referralUserAffiliatesSchema = Joi.object({
  paidRewards: coinAmountSchema,
  referralId: idSchema,
  count: countSchema,
  affiliates: referralProgramAffiliatesShortScheme
}).label('ReferralProgramAffiliateShort')



