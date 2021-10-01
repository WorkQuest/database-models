import * as Joi from "joi";
import {StatusKYC, UserRole, UserStatus} from "../models";
import {idSchema, isoDateSchema, jwtTokenAccess, jwtTokenRefresh, limitSchema, offsetSchema, locationSchema, mobilePhoneSchema} from "./common";
import {mediaUrlOnlySchema } from "./media";
import {reviewsSchema} from "./review";
import {ratingStatisticSchema} from "./ratingStatistic";
import {skillFilterSchema} from "./filter";
import {questsStatisticSchema} from "./questsStatistic";


export const userEmailSchema = Joi.string().email().max(1000).example("user@example.com").label("UserEmail");
export const userPasswordSchema = Joi.string().min(8).max(1000).example("p@ssw0rd").label("UserPassword");
export const userFirstNameSchema = Joi.string().min(1).max(1000).example("ivan").label("UserFirstName");
export const userLastNameSchema = Joi.string().min(1).max(1000).example("ivanov").label("UserLastName");
export const userStatusSchema = Joi.number().valid(...Object.keys(UserStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(UserStatus.Unconfirmed).label("UserStatus");
export const userRoleSchema = Joi.string().valid(...Object.values(UserRole)).example(UserRole.Worker).label("UserRole");
export const userPhoneSchema = Joi.string().example('+79991234567').label("Phone");
export const userTempPhoneSchema = Joi.string().example('+79991234567').label("TempPhone");
export const userCountrySchema = Joi.string().max(255).example('Russia').label('UserCountrySchema');
export const userCitySchema = Joi.string().max(255).example('Tomsk').label('UserCitySchema');
export const userIpAddressSchema = Joi.string().max(255).example('192.168.1.1').label('UserIpAddressSchema');
export const userStatusKYCSchema = Joi.number().valid(...Object.values(StatusKYC)).default(StatusKYC.Unconfirmed).example(StatusKYC.Unconfirmed).label('StatusKYCSchema');
export const userDeviceSchema = Joi.string().max(255).example('Phone').label('UserDeviceSchema');
export const userConfirmCodeSchema = Joi.string().max(255).example('2D4em7').label('UserConfirmCodeSchema');
export const userSecretSchema = Joi.string().max(255).example('JAYWY6KYG47XYNQ5').label('UserSecuritySchema');
export const userTOTPActiveSchema = Joi.boolean().example(false).label('UserTOTPActiveSchema');
export const userSessionIsActiveSchema = Joi.bool().example(false).label('UserSessionIsActiveSchema');
export const userBlockReasonSchema = Joi.string().example('You are blocked').label('UserBlockReasonSchema');
export const userTOTPSchema = Joi.object({
  confirmCode: userConfirmCodeSchema,
  active: userTOTPActiveSchema,
  secret: userSecretSchema,
}).label('UserTOTPSchema');
export const userSecuritySchema = Joi.object({
  TOTP: userTOTPSchema,
}).label('UserSecuritySchema');
export const userSocialInfoSchema = Joi.object({
  id: idSchema,
  email: userEmailSchema,
  last_name: userLastNameSchema,
  first_name: userFirstNameSchema,
}).label('UserSocialInfoSchema');
export const userSocialSchema = Joi.object({
  google: userSocialInfoSchema,
  facebook: userSocialInfoSchema,
  twitter: userSocialInfoSchema,
  linkedin: userSocialInfoSchema,
}).label('UserSocialSchema');
export const userSettingsSchema = Joi.object({
  restorePassword: userConfirmCodeSchema,
  emailConfirm: userConfirmCodeSchema,
  phoneConfirm: userConfirmCodeSchema,
  social: userSocialSchema,
  security: userSecuritySchema
}).label('UserSettingsSchema');
export const userPlaceSchema = Joi.object({
  country: userCountrySchema,
  city: userCitySchema,
}).label('UserPlaceSchema');
export const userLastSessionSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  place: userPlaceSchema,
  device: userDeviceSchema,
  ipAddress: userIpAddressSchema,
  isActive: userSessionIsActiveSchema,
  logoutAt: isoDateSchema,
  lastActionTime: isoDateSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label('UserLastSessionSchema');

export const userBlockSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  blockReason: userBlockReasonSchema,
  previousStatus: userStatusSchema,
}).label('UserBlockReason');

export const userSocialMediaNicknamesSchema = Joi.object({
  instagram: Joi.string().allow(null).label('Instagram'),
  twitter: Joi.string().allow(null).label('Twitter'),
  linkedin: Joi.string().allow(null).label('Linkedin'),
  facebook: Joi.string().allow(null).label('Facebook'),
}).label('SocialMediaNicknames');

export const userKnowledgeSchema = Joi.object({
  from: Joi.string().label('From'),
  to: Joi.string().label('To'),
  place: Joi.string().label('Place'),
}).label('Knowledge');

export const userWorkExperienceSchema = Joi.object({
  from: Joi.string().label('From'),
  to: Joi.string().label('To'),
  place: Joi.string().label('Place'),
}).label('WorkExperience');

export const userAdditionalInfoWorkerSchema = Joi.object({
  secondMobileNumber: mobilePhoneSchema.allow(null),
  address: Joi.string().allow(null).label('Address'),
  socialNetwork: userSocialMediaNicknamesSchema.label('SocialNetwork'),
  skills: Joi.array().items(Joi.string()).default([]).label('Skills'),
  educations: Joi.array().items(userKnowledgeSchema).default([]).label('Educations'),
  workExperiences: Joi.array().items(userWorkExperienceSchema).default([]).label('WorkExperiences'),
  description: Joi.string().allow(null).label("Description"),
}).label('AdditionalInfoWorker');

export const userAdditionalInfoEmployerSchema = Joi.object({
  secondMobileNumber: mobilePhoneSchema.allow(null),
  address: Joi.string().allow(null).label('Address'),
  socialNetwork: userSocialMediaNicknamesSchema.label('SocialNetwork'),
  description: Joi.string().allow(null).label("Description"),
  company: Joi.string().allow(null).label('Company'),
  CEO: Joi.string().allow(null).label('CEO'),
  website: Joi.string().allow(null).label('Website'),
}).label('AdditionalInfoEmployer');

export const userCommonAdditionalInfoSchema = Joi.object()
  .concat(userAdditionalInfoEmployerSchema)
  .concat(userAdditionalInfoWorkerSchema)
  .allow(null).label('CommonAdditionalInfo');

export const userSchema = Joi.object({
  id: idSchema,
  avatarId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  phone: mobilePhoneSchema,
  tempPhone: mobilePhoneSchema,
  email: userEmailSchema,
  additionalInfo: userCommonAdditionalInfoSchema,
  role: userRoleSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  reviews: reviewsSchema,
  skillFilters: skillFilterSchema,
  ratingStatistic: ratingStatisticSchema,
  location: locationSchema,
  questsStatistic: questsStatisticSchema,
  userBlockReason: userBlockSchema,
  lastSession: userLastSessionSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label("UserSchema");

export const userShortSchema = Joi.object({
  id: idSchema,
  avatarId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  additionalInfo: userCommonAdditionalInfoSchema,
}).label('UserShort');

//добавить сюда подтверждён или нет и тд
export const userFullSchema = Joi.object({
  id: idSchema.label("UserId"),
  avatarId: idSchema.label('AvatarId'),
  lastSessionId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  phone: userPhoneSchema,
  tempPhone: userTempPhoneSchema,
  email: userEmailSchema,
  additionalInfo: Joi.object()
    .concat(userAdditionalInfoEmployerSchema)
    .concat(userAdditionalInfoWorkerSchema)
    .allow(null).label('AdditionalInfo'),
  role: userRoleSchema,
  status: userStatusSchema,
  statusKYC: userStatusKYCSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  reviews: reviewsSchema,
  ratingStatistic: ratingStatisticSchema,
  questsStatistic: questsStatisticSchema,
  userBlockReason: userBlockSchema,
  lastSession: userLastSessionSchema,
  loginAt: isoDateSchema,
  logoutAt: isoDateSchema,
  changeRoleAt: isoDateSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
  deletedAt: isoDateSchema,
}).label("UserFullSchema");

export const userWithSettingsFullSchema = Joi.object({
  id: idSchema.label("UserId"),
  avatarId: idSchema.label('AvatarId'),
  lastSessionId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  phone: userPhoneSchema,
  tempPhone: userTempPhoneSchema,
  email: userEmailSchema,
  additionalInfo: Joi.object()
    .concat(userAdditionalInfoEmployerSchema)
    .concat(userAdditionalInfoWorkerSchema)
    .allow(null).label('AdditionalInfo'),
  role: userRoleSchema,
  settings: userSettingsSchema,
  status: userStatusSchema,
  statusKYC: userStatusKYCSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  reviews: reviewsSchema,
  ratingStatistic: ratingStatisticSchema,
  questsStatistic: questsStatisticSchema,
  lastSession: userLastSessionSchema,
  changeRoleAt: isoDateSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
  deletedAt: isoDateSchema,
}).label("UserFullSchema");

export const usersSchema = Joi.array().items(userSchema).label('Users');
export const usersShortSchema = Joi.array().items(userShortSchema).label('UsersShort');

export const tokensWithStatus = Joi.object({
  userStatus: userStatusSchema,
  access: jwtTokenAccess,
  refresh: jwtTokenRefresh,
}).label("TokensWithStatus");

export const usersQuerySchema = Joi.object({
  offset: offsetSchema,
  limit: limitSchema,
}).label('UsersQuery');
