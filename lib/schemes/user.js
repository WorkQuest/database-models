"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsSchema = exports.reviewSchema = exports.reviewMarkSchema = exports.reviewMessageSchema = exports.userSessionsSchema = exports.userSessionSchema = exports.tokensWithStatus = exports.usersShortWithAdditionalInfoSchema = exports.usersShortSchema = exports.userWorkersSchema = exports.userEmployersSchema = exports.usersSchema = exports.workerQuerySchema = exports.employerQuerySchema = exports.betweenWagePerHourSchema = exports.userListSortSchema = exports.userShortWithAdditionalInfoSchema = exports.userShortSchema = exports.userWorkerSchema = exports.userEmployerSchema = exports.userSchema = exports.userCommonAdditionalInfoSchema = exports.userAdditionalInfoEmployerSchema = exports.userAdditionalInfoWorkerSchema = exports.userWorkExperienceSchema = exports.userKnowledgeSchema = exports.userSocialMediaNicknamesSchema = exports.workerWagePerHourSchema = exports.userRoleSchema = exports.userStatusKycSchema = exports.userStatusSchema = exports.userLastNameSchema = exports.userFirstNameSchema = exports.userPasswordSchema = exports.userEmailSchema = void 0;
const Joi = require("joi");
const media_1 = require("./media");
const models_1 = require("../models");
const wallet_1 = require("./wallet");
const statistics_1 = require("./statistics");
const statistics_2 = require("./statistics");
const statistics_3 = require("./statistics");
const specialization_1 = require("./specialization");
const common_1 = require("./common");
exports.userEmailSchema = Joi.string().email().max(1000).example("user@example.com").label("UserEmail");
exports.userPasswordSchema = Joi.string().min(8).max(1000).example("p@ssw0rd").label("UserPassword");
exports.userFirstNameSchema = Joi.string().min(1).max(1000).example("ivan").label("UserFirstName");
exports.userLastNameSchema = Joi.string().min(1).max(1000).example("ivanov").label("UserLastName");
exports.userStatusSchema = Joi.number().valid(...Object.keys(models_1.UserStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.UserStatus.Unconfirmed).label("UserStatus");
exports.userStatusKycSchema = Joi.number().valid(...Object.keys(models_1.StatusKYC).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.StatusKYC.Confirmed).label("UserStatusKyc");
exports.userRoleSchema = Joi.string().valid(...Object.values(models_1.UserRole)).example(models_1.UserRole.Worker).label("UserRole");
exports.workerWagePerHourSchema = Joi.string().example("123").label('WorkerWagePerHour');
exports.userSocialMediaNicknamesSchema = Joi.object({
    instagram: Joi.string().allow(null).label('Instagram'),
    twitter: Joi.string().allow(null).label('Twitter'),
    linkedin: Joi.string().allow(null).label('Linkedin'),
    facebook: Joi.string().allow(null).label('Facebook'),
}).label('SocialMediaNicknames');
exports.userKnowledgeSchema = Joi.object({
    from: Joi.string().label('From'),
    to: Joi.string().label('To'),
    place: Joi.string().label('Place'),
}).label('Knowledge');
exports.userWorkExperienceSchema = Joi.object({
    from: Joi.string().label('From'),
    to: Joi.string().label('To'),
    place: Joi.string().label('Place'),
}).label('WorkExperience');
exports.userAdditionalInfoWorkerSchema = Joi.object({
    secondMobileNumber: common_1.phoneSchema.allow(null),
    address: Joi.string().allow(null).label('Address'),
    socialNetwork: exports.userSocialMediaNicknamesSchema.label('SocialNetwork'),
    skills: Joi.array().items(Joi.string()).default([]).label('Skills'),
    educations: Joi.array().items(exports.userKnowledgeSchema).default([]).label('Educations'),
    workExperiences: Joi.array().items(exports.userWorkExperienceSchema).default([]).label('WorkExperiences'),
    description: Joi.string().allow(null).label("Description"),
}).label('AdditionalInfoWorker');
exports.userAdditionalInfoEmployerSchema = Joi.object({
    secondMobileNumber: common_1.phoneSchema.allow(null),
    address: Joi.string().allow(null).label('Address'),
    socialNetwork: exports.userSocialMediaNicknamesSchema.label('SocialNetwork'),
    description: Joi.string().allow(null).label("Description"),
    company: Joi.string().allow(null).label('Company'),
    CEO: Joi.string().allow(null).label('CEO'),
    website: Joi.string().allow(null).label('Website'),
}).label('AdditionalInfoEmployer');
exports.userCommonAdditionalInfoSchema = Joi.object()
    .concat(exports.userAdditionalInfoEmployerSchema)
    .concat(exports.userAdditionalInfoWorkerSchema)
    .allow(null).label('CommonAdditionalInfo');
exports.userSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    phone: common_1.phoneSchema,
    tempPhone: common_1.phoneSchema,
    email: exports.userEmailSchema,
    role: exports.userRoleSchema,
    location: common_1.locationSchema,
    priority: common_1.prioritySchema,
    workplace: common_1.workPlaceSchema,
    userStatusKyc: exports.userStatusKycSchema,
    locationPlaceName: common_1.locationPlaceNameSchema,
    wagePerHour: exports.workerWagePerHourSchema,
    additionalInfo: exports.userCommonAdditionalInfoSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: statistics_3.ratingStatisticSchema,
    questsStatistic: statistics_2.questsStatisticSchema,
    chatStatistic: statistics_1.chatsStatisticSchema,
    userSpecializations: specialization_1.modelSpecializationsSchema,
    createdAt: common_1.isoDateSchema,
}).label("User");
exports.userEmployerSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    phone: common_1.phoneSchema,
    tempPhone: common_1.phoneSchema,
    email: exports.userEmailSchema,
    workplace: null,
    priority: null,
    userStatusKyc: exports.userStatusKycSchema,
    additionalInfo: exports.userAdditionalInfoEmployerSchema,
    role: exports.userRoleSchema,
    location: common_1.locationSchema,
    locationPlaceName: common_1.locationPlaceNameSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: statistics_3.ratingStatisticSchema,
    questsStatistic: statistics_2.questsStatisticSchema,
    createdAt: common_1.isoDateSchema,
}).label("UserEmployer");
exports.userWorkerSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    phone: common_1.phoneSchema,
    tempPhone: common_1.phoneSchema,
    email: exports.userEmailSchema,
    userStatusKyc: exports.userStatusKycSchema,
    additionalInfo: exports.userAdditionalInfoWorkerSchema,
    wagePerHour: exports.workerWagePerHourSchema,
    workplace: common_1.workPlaceSchema,
    role: exports.userRoleSchema,
    priority: common_1.prioritySchema,
    location: common_1.locationSchema,
    locationPlaceName: common_1.locationPlaceNameSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: statistics_3.ratingStatisticSchema,
    userSpecializations: specialization_1.modelSpecializationsSchema,
    questsStatistic: statistics_2.questsStatisticSchema,
    createdAt: common_1.isoDateSchema,
}).label("UserWorker");
exports.userShortSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: statistics_3.ratingStatisticSchema,
}).label('UserShort');
exports.userShortWithAdditionalInfoSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    additionalInfo: exports.userCommonAdditionalInfoSchema,
    ratingStatistic: statistics_3.ratingStatisticSchema,
}).label('UserShort');
exports.userListSortSchema = Joi.object({
    createdAt: common_1.sortDirectionSchema,
}).default({}).label('UserListSort');
exports.betweenWagePerHourSchema = Joi.object({
    from: exports.workerWagePerHourSchema.required(),
    to: exports.workerWagePerHourSchema.required(),
}).label('BetweenWagePerHour');
exports.employerQuerySchema = Joi.object({
    q: common_1.searchSchema,
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
    sort: exports.userListSortSchema,
    ratingStatuses: statistics_1.ratingStatusesSchema.default(null),
    northAndSouthCoordinates: common_1.searchByNorthAndSouthCoordinatesSchema.default(null),
}).label('EmployerQuery');
exports.workerQuerySchema = Joi.object({
    q: common_1.searchSchema,
    offset: common_1.offsetSchema,
    limit: common_1.limitSchema,
    sort: exports.userListSortSchema,
    priorities: common_1.prioritiesSchema.default(null),
    ratingStatuses: statistics_1.ratingStatusesSchema.default(null),
    workplaces: common_1.workPlacesSchema.unique().default(null),
    specializations: specialization_1.specializationsFilerSchema.default(null),
    betweenWagePerHour: exports.betweenWagePerHourSchema.default(null),
    northAndSouthCoordinates: common_1.searchByNorthAndSouthCoordinatesSchema.default(null),
}).label('WorkerQuery');
exports.usersSchema = Joi.array().items(exports.userSchema).label('Users');
exports.userEmployersSchema = Joi.array().items(exports.userEmployerSchema).label('UserEmployers');
exports.userWorkersSchema = Joi.array().items(exports.userWorkerSchema).label('UserWorkers');
exports.usersShortSchema = Joi.array().items(exports.userShortSchema).label('UsersShort');
exports.usersShortWithAdditionalInfoSchema = Joi.array().items(exports.userShortWithAdditionalInfoSchema).label('UsersShortWithAdditionalInfo');
exports.tokensWithStatus = Joi.object({
    userStatus: exports.userStatusSchema,
    access: common_1.jwtTokenAccess,
    refresh: common_1.jwtTokenRefresh,
    address: wallet_1.walletAddressSchema
}).label("TokensWithStatus");
exports.userSessionSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    place: common_1.sessionPlaceSchema,
    invalidating: Joi.boolean().label('UserSessionInvalidating'),
    ip: Joi.string().label('UserSessionIp'),
    device: Joi.string().label('UserSessionDevice'),
    logoutAt: common_1.isoDateSchema,
    createdAt: common_1.isoDateSchema,
    updatedAt: common_1.isoDateSchema,
}).label('UserSession');
exports.userSessionsSchema = Joi.array().items(exports.userSessionSchema).label('UserSessions');
exports.reviewMessageSchema = Joi.string().example('Hello, I need this job').default('').label('Message');
exports.reviewMarkSchema = Joi.number().min(1).max(5).label('Mark');
exports.reviewSchema = Joi.object({
    reviewId: common_1.idSchema,
    questId: common_1.idSchema,
    fromUserId: common_1.idSchema,
    toUserId: common_1.idSchema,
    message: exports.reviewMessageSchema,
    mark: exports.reviewMarkSchema,
    fromUser: exports.userShortSchema,
    toUser: exports.userShortSchema,
    createdAt: common_1.isoDateSchema,
}).label('ReviewSchema');
exports.reviewsSchema = Joi.array().items(exports.reviewSchema).label('Reviews');
