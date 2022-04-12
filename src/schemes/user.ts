import * as Joi from "joi";
import {adminSchema} from "./admin";
import {mediaUrlOnlySchema} from "./media";
import {walletAddressesSchema, walletAddressSchema} from "./wallet";
import {specializationsFilerSchema, modelSpecializationsSchema} from "./specialization";
import {
  UserRole,
  Priority,
  StatusKYC,
  UserStatus,
  RatingStatus,
  BlackListStatus,
  NetworkProfileVisibility,
} from "../models";
import {
  chatsStatisticSchema,
  questsStatisticSchema,
  userRatingStatusesSchema,
  userRatingStatisticSchema,
} from "./statistics";
import {
  idSchema,
  phoneSchema,
  limitSchema,
  offsetSchema,
  searchSchema,
  isoDateSchema,
  locationSchema,
  jwtTokenAccess,
  jwtTokenRefresh,
  prioritySchema,
  workPlaceSchema,
  workPlacesSchema,
  prioritiesSchema,
  sessionPlaceSchema,
  sortDirectionSchema,
  locationPlaceNameSchema,
  searchByNorthAndSouthCoordinatesSchema,
} from "./common";

export const userEmailSchema = Joi.string().email().max(1000).example("user@example.com").label("UserEmail");
export const userPasswordSchema = Joi.string().min(8).max(1000).example("p@ssw0rd").label("UserPassword");
export const userFirstNameSchema = Joi.string().min(1).max(1000).example("ivan").label("UserFirstName");
export const userLastNameSchema = Joi.string().min(1).max(1000).example("ivanov").label("UserLastName");
export const userTotpIsActiveSchema = Joi.boolean().example(true).label('UserTotpIsActive')
export const userStatusSchema = Joi.number().valid(...Object.keys(UserStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(UserStatus.Unconfirmed).label("UserStatus");
export const userStatusKycSchema = Joi.number().valid(...Object.keys(StatusKYC).map(key => parseInt(key)).filter(key => !isNaN(key))).example(StatusKYC.Confirmed).label("UserStatusKyc");
export const userRoleSchema = Joi.string().valid(...Object.values(UserRole)).example(UserRole.Worker).label("UserRole");
export const workerWagePerHourSchema = Joi.string().example("123").label('WorkerWagePerHour');

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
  secondMobileNumber: phoneSchema.allow(null),
  address: Joi.string().allow(null).label('Address'),
  socialNetwork: userSocialMediaNicknamesSchema.label('SocialNetwork'),
  skills: Joi.array().items(Joi.string()).default([]).label('Skills'),
  educations: Joi.array().items(userKnowledgeSchema).default([]).label('Educations'),
  workExperiences: Joi.array().items(userWorkExperienceSchema).default([]).label('WorkExperiences'),
  description: Joi.string().allow(null).label("Description"),
}).label('AdditionalInfoWorker');

export const userAdditionalInfoEmployerSchema = Joi.object({
  secondMobileNumber: phoneSchema.allow(null),
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
  phone: phoneSchema,
  tempPhone: phoneSchema,
  email: userEmailSchema,
  role: userRoleSchema,
  location: locationSchema,
  priority: prioritySchema,
  workplace: workPlaceSchema,
  userStatusKyc: userStatusKycSchema,
  locationPlaceName: locationPlaceNameSchema,
  wagePerHour: workerWagePerHourSchema,
  additionalInfo: userCommonAdditionalInfoSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  ratingStatistic: userRatingStatisticSchema,
  questsStatistic: questsStatisticSchema,
  chatStatistic: chatsStatisticSchema,
  userSpecializations: modelSpecializationsSchema,
  createdAt: isoDateSchema,
}).label("User");

export const userMeSchema = Joi.object({
  id: idSchema,
  avatarId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  phone: phoneSchema,
  tempPhone: phoneSchema,
  email: userEmailSchema,
  role: userRoleSchema,
  location: locationSchema,
  priority: prioritySchema,
  workplace: workPlaceSchema,
  userStatusKyc: userStatusKycSchema,
  locationPlaceName: locationPlaceNameSchema,
  wagePerHour: workerWagePerHourSchema,
  additionalInfo: userCommonAdditionalInfoSchema,
  totpIsActive: userTotpIsActiveSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  ratingStatistic: userRatingStatisticSchema,
  questsStatistic: questsStatisticSchema,
  chatStatistic: chatsStatisticSchema,
  userSpecializations: modelSpecializationsSchema,
  wallet: walletAddressesSchema,
  affiliateUser: Joi.object({
    referralCodeId: idSchema,
  }).label('AffiliateMe'),
  createdAt: isoDateSchema,
}).label("UserMe");

export const userEmployerSchema = Joi.object({
  id: idSchema,
  avatarId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  phone: phoneSchema,
  tempPhone: phoneSchema,
  email: userEmailSchema,
  workplace: null, /** Only worker */
  priority: null, /** Only worker */
  userStatusKyc: userStatusKycSchema,
  additionalInfo: userAdditionalInfoEmployerSchema,
  role: userRoleSchema,
  location: locationSchema,
  locationPlaceName: locationPlaceNameSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  ratingStatistic: userRatingStatisticSchema,
  questsStatistic: questsStatisticSchema,
  createdAt: isoDateSchema,
}).label("UserEmployer");

export const userWorkerSchema = Joi.object({
  id: idSchema,
  avatarId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  phone: phoneSchema,
  tempPhone: phoneSchema,
  email: userEmailSchema,
  userStatusKyc: userStatusKycSchema,
  additionalInfo: userAdditionalInfoWorkerSchema,
  wagePerHour: workerWagePerHourSchema,
  workplace: workPlaceSchema,
  role: userRoleSchema,
  priority: prioritySchema,
  location: locationSchema,
  locationPlaceName: locationPlaceNameSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  ratingStatistic: userRatingStatisticSchema,
  userSpecializations: modelSpecializationsSchema,
  questsStatistic: questsStatisticSchema,
  createdAt: isoDateSchema,
}).label("UserWorker");

export const userShortSchema = Joi.object({
  id: idSchema,
  avatarId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  ratingStatistic: userRatingStatisticSchema,
}).label('UserShort');

export const userShortWithAdditionalInfoSchema = Joi.object({
  id: idSchema,
  avatarId: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  additionalInfo: userCommonAdditionalInfoSchema,
  ratingStatistic: userRatingStatisticSchema,
}).label('UserShort');

export const userShortWithWalletSchema = Joi.object({
  id: idSchema,
  firstName: userFirstNameSchema,
  lastName: userLastNameSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  ratingStatistic: userRatingStatisticSchema,
  wallet: walletAddressesSchema,
}).label('UserShortWithWallet');

export const userListSortSchema = Joi.object({
  createdAt: sortDirectionSchema,
}).default({}).label('UserListSort');

export const betweenWagePerHourSchema = Joi.object({
  from: workerWagePerHourSchema.required(),
  to: workerWagePerHourSchema.required(),
}).label('BetweenWagePerHour');

export const employerQuerySchema = Joi.object({
  q: searchSchema,
  limit: limitSchema,
  offset: offsetSchema,
  sort: userListSortSchema,
  ratingStatuses: userRatingStatusesSchema.default(null),
  northAndSouthCoordinates: searchByNorthAndSouthCoordinatesSchema.default(null),
}).label('EmployerQuery');

export const workerQuerySchema = Joi.object({
  q: searchSchema,
  offset: offsetSchema,
  limit: limitSchema,
  sort: userListSortSchema,
  priorities: prioritiesSchema.default(null),
  ratingStatuses: userRatingStatusesSchema.default(null),
  workplaces: workPlacesSchema.unique().default(null),
  betweenWagePerHour: betweenWagePerHourSchema.default(null),
  northAndSouthCoordinates: searchByNorthAndSouthCoordinatesSchema.default(null),
}).label('WorkerQuery');

export const workerQueryForMapPointsSchema = Joi.object({
  q: searchSchema,
  priorities: prioritiesSchema.default(null),
  ratingStatuses: userRatingStatusesSchema.default(null),
  workplaces: workPlacesSchema.unique().default(null),
  betweenWagePerHour: betweenWagePerHourSchema.default(null),
  northAndSouthCoordinates: searchByNorthAndSouthCoordinatesSchema.required(),
}).label('WorkerQueryForMapPoints');

export const workerPayloadSchema = Joi.object({
  specializations: specializationsFilerSchema.default(null),
}).label('WorkerPayload')

export const usersSchema = Joi.array().items(userSchema).label('Users');
export const userEmployersSchema = Joi.array().items(userEmployerSchema).label('UserEmployers');
export const userWorkersSchema = Joi.array().items(userWorkerSchema).label('UserWorkers');
export const usersShortSchema = Joi.array().items(userShortSchema).label('UsersShort');
export const usersShortWithAdditionalInfoSchema = Joi.array().items(userShortWithAdditionalInfoSchema).label('UsersShortWithAdditionalInfo');

export const tokensWithStatus = Joi.object({
  userStatus: userStatusSchema,
  access: jwtTokenAccess,
  refresh: jwtTokenRefresh,
  address: walletAddressSchema,
}).label("TokensWithStatus");

/** Visibility settings */

export const profileVisibilityStatusSchema = Joi.number().valid(...Object.keys(RatingStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(Priority.AllPriority).label("ProfileVisibilityStatus");
export const profileVisibilityNetworkSchema = Joi.number().valid(...Object.keys(NetworkProfileVisibility).map(key => parseInt(key)).filter(key => !isNaN(key))).example(NetworkProfileVisibility.AllUsers).label("ProfileVisibilityNetwork");

export const profileVisibilitySettingsSchema = Joi.object({
  network: profileVisibilityStatusSchema.required(),
  ratingStatus: profileVisibilityNetworkSchema.required(),
}).label('ProfileVisibilitySettings');

/** Sessions */

export const userSessionSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  place: sessionPlaceSchema,
  invalidating: Joi.boolean().label('UserSessionInvalidating'),
  ip: Joi.string().label('UserSessionIp'),
  device: Joi.string().label('UserSessionDevice'),
  logoutAt: isoDateSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label('UserSession');

export const userSessionsSchema = Joi.array().items(userSessionSchema).label('UserSessions');

/** Black list */

export const userBlackListReasonSchema = Joi.string().example('Reason...').label('UserBlackReason');
export const userBlackListStatusSchema = Joi.number().valid(...Object.keys(BlackListStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(BlackListStatus.Blocked).label("UserBlackStatus");

export const userBlackListSchema = Joi.object({
  id: idSchema,
  blockedByAdminId: idSchema,
  unblockedByAdminId: idSchema,
  userId: idSchema,
  reason: userBlackListReasonSchema,
  userStatusBeforeBlocking: userStatusSchema,
  status: userBlackListStatusSchema,
  user: userSchema,
  blockedByAdmin: adminSchema,
  unblockedByAdmin: adminSchema,
}).label('UserBlackList');


