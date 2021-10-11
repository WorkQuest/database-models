"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokensWithStatus = exports.usersShortSchema = exports.userWorkersSchema = exports.userEmployersSchema = exports.usersSchema = exports.userQuerySchema = exports.userListSortSchema = exports.userShortSchema = exports.userWorkerSchema = exports.userEmployerSchema = exports.userSchema = exports.userCommonAdditionalInfoSchema = exports.userAdditionalInfoEmployerSchema = exports.userAdditionalInfoWorkerSchema = exports.userWorkExperienceSchema = exports.userKnowledgeSchema = exports.userSocialMediaNicknamesSchema = exports.userRoleSchema = exports.userStatusSchema = exports.userLastNameSchema = exports.userFirstNameSchema = exports.userPasswordSchema = exports.userEmailSchema = void 0;
const Joi = require("joi");
const models_1 = require("../models");
const common_1 = require("./common");
const media_1 = require("./media");
const review_1 = require("./review");
const ratingStatistic_1 = require("./ratingStatistic");
const specialization_1 = require("./specialization");
exports.userEmailSchema = Joi.string().email().max(1000).example("user@example.com").label("UserEmail");
exports.userPasswordSchema = Joi.string().min(8).max(1000).example("p@ssw0rd").label("UserPassword");
exports.userFirstNameSchema = Joi.string().min(1).max(1000).example("ivan").label("UserFirstName");
exports.userLastNameSchema = Joi.string().min(1).max(1000).example("ivanov").label("UserLastName");
exports.userStatusSchema = Joi.number().valid(...Object.keys(models_1.UserStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.UserStatus.Unconfirmed).label("UserStatus");
exports.userRoleSchema = Joi.string().valid(...Object.values(models_1.UserRole)).example(models_1.UserRole.Worker).label("UserRole");
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
    additionalInfo: exports.userCommonAdditionalInfoSchema,
    role: exports.userRoleSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    reviews: review_1.reviewsSchema,
    ratingStatistic: ratingStatistic_1.ratingStatisticSchema,
    userSpecializations: specialization_1.specializationsSchema,
    location: common_1.locationSchema,
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
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    reviews: review_1.reviewsSchema,
    ratingStatistic: ratingStatistic_1.ratingStatisticSchema,
    userSpecializations: specialization_1.specializationsSchema,
    location: common_1.locationSchema,
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
    role: exports.userRoleSchema,
    avatar: media_1.mediaUrlOnlySchema.allow(null),
    reviews: review_1.reviewsSchema,
    ratingStatistic: ratingStatistic_1.ratingStatisticSchema,
    userSpecializations: specialization_1.specializationsSchema,
    location: common_1.locationSchema,
}).label("UserWorker");
exports.userShortSchema = Joi.object({
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
exports.userQuerySchema = Joi.object({
    q: common_1.searchSchema,
    north: common_1.locationSchema,
    south: common_1.locationSchema,
    sort: exports.userListSortSchema,
    specialization: specialization_1.specializationsFilerSchema.default(null),
}).label('UserQuery');
exports.usersSchema = Joi.array().items(exports.userSchema).label('Users');
exports.userEmployersSchema = Joi.array().items(exports.userEmployerSchema).label('UserEmployers');
exports.userWorkersSchema = Joi.array().items(exports.userWorkerSchema).label('UserWorkers');
exports.usersShortSchema = Joi.array().items(exports.userShortSchema).label('UsersShort');
exports.tokensWithStatus = Joi.object({
    userStatus: exports.userStatusSchema,
    access: common_1.jwtTokenAccess,
    refresh: common_1.jwtTokenRefresh,
}).label("TokensWithStatus");
