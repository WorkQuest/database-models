import * as Joi from "joi";
import {UserRole, UserStatus, WorkPlace} from "../models";
import {mediaUrlOnlySchema} from "./media";
import {ratingStatisticSchema, ratingStatusSchema} from "./ratingStatistic";
import {specializationsFilerSchema, modelSpecializationsSchema} from "./specialization";
import {
  idSchema,
  limitSchema,
  offsetSchema,
  searchSchema,
  isoDateSchema,
  locationSchema,
  jwtTokenAccess,
  jwtTokenRefresh,
  workPlaceSchema,
  workPlacesSchema,
  mobilePhoneSchema,
  sortDirectionSchema,
} from "./common";

export const userEmailSchema = Joi.string().email().max(1000).example("user@example.com").label("UserEmail");
export const userPasswordSchema = Joi.string().min(8).max(1000).example("p@ssw0rd").label("UserPassword");
export const userFirstNameSchema = Joi.string().min(1).max(1000).example("ivan").label("UserFirstName");
export const userLastNameSchema = Joi.string().min(1).max(1000).example("ivanov").label("UserLastName");
export const userStatusSchema = Joi.number().valid(...Object.keys(UserStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(UserStatus.Unconfirmed).label("UserStatus");
export const userRoleSchema = Joi.string().valid(...Object.values(UserRole)).example(UserRole.Worker).label("UserRole");
export const workerWagePerHourSchema = Joi.string().example("123").label('UserWage');

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
  role: userRoleSchema,
  wagePerHour: workerWagePerHourSchema,
  additionalInfo: userCommonAdditionalInfoSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  ratingStatistic: ratingStatisticSchema,
  userSpecializations: modelSpecializationsSchema,
  location: locationSchema,
}).label("User");

export const userEmployerSchema = Joi.object({
  id: idSchema,
  avatarId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  phone: mobilePhoneSchema,
  tempPhone: mobilePhoneSchema,
  email: userEmailSchema,
  additionalInfo: userAdditionalInfoEmployerSchema,
  role: userRoleSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  ratingStatistic: ratingStatisticSchema,
  location: locationSchema,
}).label("UserEmployer");

export const userWorkerSchema = Joi.object({
  id: idSchema,
  avatarId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  phone: mobilePhoneSchema,
  tempPhone: mobilePhoneSchema,
  email: userEmailSchema,
  additionalInfo: userAdditionalInfoWorkerSchema,
  wagePerHour: workerWagePerHourSchema,
  workplace: workPlaceSchema,
  role: userRoleSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  ratingStatistic: ratingStatisticSchema,
  userSpecializations: modelSpecializationsSchema,
  location: locationSchema,
}).label("UserWorker");

export const userShortSchema = Joi.object({
  id: idSchema,
  avatarId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  avatar: mediaUrlOnlySchema.allow(null),
}).label('UserShort');

export const userShortWithAdditionalInfoSchema = Joi.object({
  id: idSchema,
  avatarId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  additionalInfo: userCommonAdditionalInfoSchema,
}).label('UserShort');

export const userListSortSchema = Joi.object({
  createdAt: sortDirectionSchema,
}).default({}).label('UserListSort');

export const betweenWagePerHourSchema = Joi.object({
  from: workerWagePerHourSchema.required(),
  to: workerWagePerHourSchema.required(),
}).label('BetweenWagePerHour');

// TODO "north" and "south" in object
export const employerQuerySchema = Joi.object({
  q: searchSchema,
  limit: limitSchema,
  offset: offsetSchema,
  north: locationSchema, // TODO in object
  south: locationSchema,
  sort: userListSortSchema,
  ratingStatus: ratingStatusSchema.default(null),
}).label('UserQuery');

export const workerQuerySchema = Joi.object({
  q: searchSchema,
  offset: offsetSchema,
  limit: limitSchema,
  north: locationSchema, // TODO in object
  south: locationSchema,
  sort: userListSortSchema,
  ratingStatus: ratingStatusSchema.default(null),
  workplace: workPlacesSchema.unique().default(null),
  specialization: specializationsFilerSchema.default(null),
  betweenWagePerHour: betweenWagePerHourSchema.default(null),
}).label('UserQuery');

export const usersSchema = Joi.array().items(userSchema).label('Users');
export const userEmployersSchema = Joi.array().items(userEmployerSchema).label('UserEmployers');
export const userWorkersSchema = Joi.array().items(userWorkerSchema).label('UserWorkers');
export const usersShortSchema = Joi.array().items(userShortSchema).label('UsersShort');
export const usersShortWithAdditionalInfoSchema = Joi.array().items(userShortWithAdditionalInfoSchema).label('UsersShortWithAdditionalInfo');

export const tokensWithStatus = Joi.object({
  userStatus: userStatusSchema,
  access: jwtTokenAccess,
  refresh: jwtTokenRefresh,
}).label("TokensWithStatus");

/** Review */

export const reviewMessageSchema = Joi.string().example('Hello, I need this job').default('').label('Message');
export const reviewMarkSchema = Joi.number().min(1).max(5).label('Mark');

export const reviewSchema = Joi.object({
  reviewId: idSchema,
  questId: idSchema,
  fromUserId: idSchema,
  toUserId: idSchema,
  message: reviewMessageSchema,
  mark: reviewMarkSchema,
  fromUser: userShortSchema,
  toUser: userShortSchema,
  // quest: , TODO undefined schema
  createdAt: isoDateSchema,
}).label('ReviewSchema');

export const reviewsSchema = Joi.array().items(reviewSchema).label('Reviews');
