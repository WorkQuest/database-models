import * as Joi from "joi";
import {accountAddressSchema, accountAddressesSchema} from "./common";

export const referralAddAffiliatesSchema = Joi.object({
  v: accountAddressSchema,
  r: accountAddressSchema,
  s: accountAddressSchema,
  referral: accountAddressesSchema,
}).label('ReferralAddAffiliates');
