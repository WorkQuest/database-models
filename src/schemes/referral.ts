import * as Joi from "joi";
import {
  accountAddressSchema,
  accountAddressesSchema,
  coinAmountSchema,
  idSchema,
  countSchema, transactionHashSchema, isoDateSchema, timestampSchema,
} from "./common";
import {ReferralStatus, RewardStatus} from "../models";
import {userFirstNameSchema, userLastNameSchema, userShortSchema} from "./user";

export const referralProgramReferralStatusSchema = Joi.string().valid(...Object.values(ReferralStatus)).example(ReferralStatus.Created).label('ReferralProgramReferralStatus');
export const referralProgramRewardStatusSchema = Joi.string().valid(...Object.values(RewardStatus)).example(RewardStatus.Paid).label('ReferralProgramRewardStatus');

export const referralProgramUserReferralsScheme = Joi.object({
  v: accountAddressSchema,
  r: accountAddressSchema,
  s: accountAddressSchema,
  referral: accountAddressesSchema,
}).label('ReferralProgramUserReferrals');

export const referralProgramReferralShortScheme = Joi.object({
  id: idSchema,
  referralUserId: idSchema,
  referralProgramId: idSchema,
  referralStatus: referralProgramReferralStatusSchema,
  rewardStatus: referralProgramRewardStatusSchema,
  userAffiliate: userShortSchema
}).label('ReferralProgramAffiliateShort')

export const referralProgramReferralsShortScheme = Joi.array().items(referralProgramReferralShortScheme).label('ReferralProgramAffiliatesShort');

export const affiliateUserReferralsSchema = Joi.object({
  paidRewards: coinAmountSchema,
  referralId: idSchema,
  count: countSchema,
  affiliates: referralProgramReferralsShortScheme
}).label('ReferralProgramAffiliateShort')

export const referralProgramUserClaimedEventScheme = Joi.object({
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  userId: idSchema,
  txHash: transactionHashSchema,
  createdAt: timestampSchema,
  amount: coinAmountSchema,
  status: referralProgramRewardStatusSchema
}).label('ReferralUserClaimedEvents')

export const referralProgramUsersClaimedEventsScheme = Joi.array().items(referralProgramUserClaimedEventScheme).label('ReferralProgramUsersClaimedEvents');
