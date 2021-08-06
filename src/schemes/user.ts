import * as Joi from "joi";
import { UserRole, UserStatus } from "../models";
import {idSchema, isoDateSchema, jwtTokenAccess, jwtTokenRefresh} from "./common";
import {mediaUrlOnlySchema } from "./media";
import {reviewsSchema} from "./review";
import {ratingStatisticSchema} from "./ratingStatistic";

export const userEmailSchema = Joi.string().email().max(1000).example("user@example.com").label("UserEmail");
export const userPasswordSchema = Joi.string().min(8).max(1000).example("p@ssw0rd").label("UserPassword");
export const userFirstNameSchema = Joi.string().min(1).max(1000).example("ivan").label("UserFirstName");
export const userLastNameSchema = Joi.string().min(1).max(1000).example("ivanov").label("UserLastName");
export const userStatusSchema = Joi.number().valid(...Object.keys(UserStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(UserStatus.Unconfirmed).label("UserStatus");
export const userRoleSchema = Joi.string().valid(...Object.values(UserRole)).example(UserRole.Worker).label("UserRole");
export const userPhoneSchema = Joi.string().example('+79991234567').label("Phone");
export const userTempPhoneSchema = Joi.string().example('+79991234567').label("TempPhone");

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
  secondMobileNumber: Joi.string().allow(null).label('SecondMobileNumber'),
  address: Joi.string().allow(null).label('Address'),
  socialNetwork: userSocialMediaNicknamesSchema.label('SocialNetwork'),
  skills: Joi.array().items(Joi.string()).default([]).label('Skills'),
  educations: Joi.array().items(userKnowledgeSchema).default([]).label('Educations'),
  workExperiences: Joi.array().items(userWorkExperienceSchema).default([]).label('WorkExperiences'),
  description: Joi.string().allow(null).label("Description"),
}).label('AdditionalInfoWorker');

export const userAdditionalInfoEmployerSchema = Joi.object({
  secondMobileNumber: Joi.string().allow(null).label('SecondMobileNumber'),
  address: Joi.string().allow(null).label('Address'),
  socialNetwork: userSocialMediaNicknamesSchema.label('SocialNetwork'),
  description: Joi.string().allow(null).label("Description"),
  company: Joi.string().allow(null).label('Company'),
  CEO: Joi.string().allow(null).label('CEO'),
  website: Joi.string().allow(null).label('Website'),
}).label('AdditionalInfoEmployer');

export const userSchema = Joi.object({
  id: idSchema.label("UserId"),
  avatarId: idSchema.label('AvatarId'),
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
  avatar: mediaUrlOnlySchema.allow(null),
  reviews: reviewsSchema,
  ratingStatistic: ratingStatisticSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label("UserSchema");

export const usersSchema = Joi.array().items(userSchema).label('Users');

export const tokensWithStatus = Joi.object({
  userStatus: userStatusSchema,
  access: jwtTokenAccess,
  refresh: jwtTokenRefresh,
}).label("TokensWithStatus");
