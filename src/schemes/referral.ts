import * as Joi from "joi";
import {ReferralStatus, RewardStatus} from "../models";
import {userFirstNameSchema, userLastNameSchema, userShortSchema, userShortWithWalletSchema} from "./user";
import {
  idSchema,
  countSchema,
  timestampSchema,
  coinAmountSchema,
  accountAddressSchema,
  transactionHashSchema,
  accountAddressesSchema,
} from "./common";

export const referralProgramReferralStatusSchema = Joi.string().valid(...Object.values(ReferralStatus)).example(ReferralStatus.Created).label('ReferralProgramReferralStatus');
export const referralProgramReferralRewardStatusSchema = Joi.string().valid(...Object.values(RewardStatus)).example(RewardStatus.Paid).label('ReferralProgramReferralRewardStatus');

export const referralProgramAffiliateSchema = Joi.object({
  id: idSchema,
  affiliateUserId: idSchema,
  paidReward: coinAmountSchema,
  referralCodeId: idSchema,
  affiliateUser: userShortWithWalletSchema,
  // affiliate
}).label('');

export const referralProgramReferralSchema = Joi.object({
  id: idSchema,
  referralUserId:
  referralProgramId
  referralStatus
  rewardStatus
  userAffiliate: userShortWithWalletSchema,
  referralProgramAffiliate
}).label('');

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
  rewardStatus: referralProgramReferralRewardStatusSchema,
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
