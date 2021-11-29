"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsSchema = exports.reviewSchema = exports.reviewMarkSchema = exports.reviewMessageSchema = exports.tokensWithStatus = exports.usersShortWithAdditionalInfoSchema = exports.usersShortSchema = exports.userWorkersSchema = exports.userEmployersSchema = exports.usersSchema = exports.workerQuerySchema = exports.employerQuerySchema = exports.betweenWagePerHourSchema = exports.userListSortSchema = exports.userShortWithAdditionalInfoSchema = exports.userShortSchema = exports.userWorkerSchema = exports.userEmployerSchema = exports.userSchema = exports.userCommonAdditionalInfoSchema = exports.userAdditionalInfoEmployerSchema = exports.userAdditionalInfoWorkerSchema = exports.userWorkExperienceSchema = exports.userKnowledgeSchema = exports.userSocialMediaNicknamesSchema = exports.workerWagePerHourSchema = exports.userRoleSchema = exports.userStatusSchema = exports.userLastNameSchema = exports.userFirstNameSchema = exports.userPasswordSchema = exports.userEmailSchema = void 0;
const Joi = require("joi");
const media_1 = require("./media");
const models_1 = require("../models");
const questsStatistic_1 = require("./questsStatistic");
const ratingStatistic_1 = require("./ratingStatistic");
const specialization_1 = require("./specialization");
const common_1 = require("./common");
exports.userEmailSchema = Joi.string().email().max(1000).example("user@example.com").label("UserEmail");
exports.userPasswordSchema = Joi.string().min(8).max(1000).example("p@ssw0rd").label("UserPassword");
exports.userFirstNameSchema = Joi.string().min(1).max(1000).example("ivan").label("UserFirstName");
exports.userLastNameSchema = Joi.string().min(1).max(1000).example("ivanov").label("UserLastName");
exports.userStatusSchema = Joi.number().valid(...Object.keys(models_1.UserStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.UserStatus.Unconfirmed).label("UserStatus");
exports.userRoleSchema = Joi.string().valid(...Object.values(models_1.UserRole)).example(models_1.UserRole.Worker).label("UserRole");
exports.workerWagePerHourSchema = Joi.string().example("123").label('UserWage');
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
    secondMobileNumber: common_1.mobilePhoneSchema.allow(null),
    address: Joi.string().allow(null).label('Address'),
    socialNetwork: exports.userSocialMediaNicknamesSchema.label('SocialNetwork'),
    skills: Joi.array().items(Joi.string()).default([]).label('Skills'),
    educations: Joi.array().items(exports.userKnowledgeSchema).default([]).label('Educations'),
    workExperiences: Joi.array().items(exports.userWorkExperienceSchema).default([]).label('WorkExperiences'),
    description: Joi.string().allow(null).label("Description"),
}).label('AdditionalInfoWorker');
exports.userAdditionalInfoEmployerSchema = Joi.object({
    secondMobileNumber: common_1.mobilePhoneSchema.allow(null),
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
    phone: common_1.mobilePhoneSchema,
    tempPhone: common_1.mobilePhoneSchema,
    email: exports.userEmailSchema,
    role: exports.userRoleSchema,
    location: common_1.locationSchema,
    wagePerHour: exports.workerWagePerHourSchema,
    additionalInfo: exports.userCommonAdditionalInfoSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: ratingStatistic_1.ratingStatisticSchema,
    questsStatistic: questsStatistic_1.questsStatisticSchema,
    userSpecializations: specialization_1.modelSpecializationsSchema,
}).label("User");
exports.userEmployerSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    phone: common_1.mobilePhoneSchema,
    tempPhone: common_1.mobilePhoneSchema,
    email: exports.userEmailSchema,
    additionalInfo: exports.userAdditionalInfoEmployerSchema,
    role: exports.userRoleSchema,
    location: common_1.locationSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: ratingStatistic_1.ratingStatisticSchema,
    questsStatistic: questsStatistic_1.questsStatisticSchema,
}).label("UserEmployer");
exports.userWorkerSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    phone: common_1.mobilePhoneSchema,
    tempPhone: common_1.mobilePhoneSchema,
    email: exports.userEmailSchema,
    additionalInfo: exports.userAdditionalInfoWorkerSchema,
    wagePerHour: exports.workerWagePerHourSchema,
    role: exports.userRoleSchema,
    location: common_1.locationSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    ratingStatistic: ratingStatistic_1.ratingStatisticSchema,
    userSpecializations: specialization_1.modelSpecializationsSchema,
    questsStatistic: questsStatistic_1.questsStatisticSchema,
}).label("UserWorker");
exports.userShortSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
}).label('UserShort');
exports.userShortWithAdditionalInfoSchema = Joi.object({
    id: common_1.idSchema,
    avatarId: common_1.idSchema,
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    additionalInfo: exports.userCommonAdditionalInfoSchema,
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
    north: common_1.locationSchema,
    south: common_1.locationSchema,
    sort: exports.userListSortSchema,
    ratingStatus: ratingStatistic_1.ratingStatusSchema.default(null),
}).label('UserQuery');
exports.workerQuerySchema = Joi.object({
    q: common_1.searchSchema,
    offset: common_1.offsetSchema,
    limit: common_1.limitSchema,
    north: common_1.locationSchema,
    south: common_1.locationSchema,
    sort: exports.userListSortSchema,
    ratingStatus: ratingStatistic_1.ratingStatusSchema.default(null),
    betweenWagePerHour: exports.betweenWagePerHourSchema.default(null),
    specialization: specialization_1.specializationsFilerSchema.default(null),
}).label('UserQuery');
exports.usersSchema = Joi.array().items(exports.userSchema).label('Users');
exports.userEmployersSchema = Joi.array().items(exports.userEmployerSchema).label('UserEmployers');
exports.userWorkersSchema = Joi.array().items(exports.userWorkerSchema).label('UserWorkers');
exports.usersShortSchema = Joi.array().items(exports.userShortSchema).label('UsersShort');
exports.usersShortWithAdditionalInfoSchema = Joi.array().items(exports.userShortWithAdditionalInfoSchema).label('UsersShortWithAdditionalInfo');
exports.tokensWithStatus = Joi.object({
    userStatus: exports.userStatusSchema,
    access: common_1.jwtTokenAccess,
    refresh: common_1.jwtTokenRefresh,
}).label("TokensWithStatus");
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
