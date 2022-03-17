import * as Joi from "joi";
import {ReferralStatus, RewardStatus} from "../models";
import {
  userLastNameSchema,
  userFirstNameSchema,
  userShortWithWalletSchema,
} from "./user";
import {
  idSchema,
  timestampSchema,
  coinAmountSchema,
  blockNumberSchema,
  accountAddressSchema,
  transactionHashSchema,
} from "./common";

export const referralStatusSchema = Joi.string().valid(...Object.values(ReferralStatus)).example(ReferralStatus.Created).label('ReferralStatus');
export const referralRewardStatusSchema = Joi.string().valid(...Object.values(RewardStatus)).example(RewardStatus.Paid).label('ReferralRewardStatus');

export const referralSchema = Joi.object({
  id: idSchema,
  referralUserId: idSchema,
  affiliateId: idSchema,
  referralStatus: referralStatusSchema,
  rewardStatus: referralRewardStatusSchema,
  referralUser: userShortWithWalletSchema,
  // referralProgramAffiliate: ,
}).label('Referral');

export const affiliateSchema = Joi.object({
  id: idSchema,
  affiliateUserId: idSchema,
  referralCodeId: idSchema,
  affiliateUser: userShortWithWalletSchema,
  // referralProgramReferral: ,
}).label('Affiliate');

export const referralProgramClaimedAndPaidEventNameSchema = Joi.string().valid('PaidReferral', 'RewardClaimed').example('RewardClaimed').label('ReferralProgramClaimedAndPaidEventName');

export const referralProgramClaimedAndPaidEventSchema = Joi.object({
  referral: idSchema,
  affiliate: idSchema,
  blockNumber: blockNumberSchema,
  transactionHash: transactionHashSchema,
  amount: coinAmountSchema,
  timestamp: timestampSchema,
  event: referralProgramClaimedAndPaidEventNameSchema
}).label('ReferralProgramClaimedAndPaidEvent');

export const affiliateOnlyIdSchema = Joi.object({
  referralCodeId: idSchema
}).label('AffiliateOnlyId');
