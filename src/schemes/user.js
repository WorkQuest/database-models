"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersSchema = exports.userSchema = exports.userAdditionalInfoEmployerSchema = exports.userAdditionalInfoWorkerSchema = exports.userWorkExperienceSchema = exports.userKnowledgeSchema = exports.userSocialMediaNicknamesSchema = exports.userTempPhoneSchema = exports.userPhoneSchema = exports.userRoleSchema = exports.userStatusSchema = exports.userLastNameSchema = exports.userFirstNameSchema = exports.userPasswordSchema = exports.userEmailSchema = void 0;
const Joi = require("joi");
const models_1 = require("../models");
const index_1 = require("./index");
exports.userEmailSchema = Joi.string().email().max(1000).example("user@example.com").label("UserEmail");
exports.userPasswordSchema = Joi.string().min(8).max(1000).example("p@ssw0rd").label("UserPassword");
exports.userFirstNameSchema = Joi.string().min(1).max(1000).example("ivan").label("UserFirstName");
exports.userLastNameSchema = Joi.string().min(1).max(1000).example("ivanov").label("UserLastName");
exports.userStatusSchema = Joi.number().valid(...Object.keys(models_1.UserStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.UserStatus.Unconfirmed).label("UserStatus");
exports.userRoleSchema = Joi.string().valid(...Object.values(models_1.UserRole)).example(models_1.UserRole.Worker).label("UserRole");
exports.userPhoneSchema = Joi.string().example('+79991234567').label("Phone");
exports.userTempPhoneSchema = Joi.string().example('+79991234567').label("TempPhone");
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
    secondMobileNumber: Joi.string().allow(null).label('SecondMobileNumber'),
    address: Joi.string().allow(null).label('Address'),
    socialNetwork: exports.userSocialMediaNicknamesSchema.label('SocialNetwork'),
    skills: Joi.array().items(Joi.string()).default([]).label('Skills'),
    educations: Joi.array().items(exports.userKnowledgeSchema).default([]).label('Educations'),
    workExperiences: Joi.array().items(exports.userWorkExperienceSchema).default([]).label('WorkExperiences'),
    description: Joi.string().allow(null).label("Description"),
}).label('AdditionalInfoWorker');
exports.userAdditionalInfoEmployerSchema = Joi.object({
    secondMobileNumber: Joi.string().allow(null).label('SecondMobileNumber'),
    address: Joi.string().allow(null).label('Address'),
    socialNetwork: exports.userSocialMediaNicknamesSchema.label('SocialNetwork'),
    description: Joi.string().allow(null).label("Description"),
    company: Joi.string().allow(null).label('Company'),
    CEO: Joi.string().allow(null).label('CEO'),
    website: Joi.string().allow(null).label('Website'),
}).label('AdditionalInfoEmployer');
exports.userSchema = Joi.object({
    id: index_1.idSchema.label("UserId"),
    avatarId: index_1.idSchema.label('AvatarId'),
    firstName: exports.userFirstNameSchema,
    lastName: exports.userLastNameSchema,
    phone: exports.userPhoneSchema,
    tempPhone: exports.userTempPhoneSchema,
    email: exports.userEmailSchema,
    additionalInfo: Joi.object()
        .concat(exports.userAdditionalInfoEmployerSchema)
        .concat(exports.userAdditionalInfoWorkerSchema)
        .allow(null).label('AdditionalInfo'),
    role: exports.userRoleSchema,
    avatar: index_1.mediaUrlOnlySchema.allow(null),
    reviews: index_1.reviewsSchema,
    ratingStatistic: index_1.ratingStatisticSchema,
    createdAt: index_1.isoDateSchema,
    updatedAt: index_1.isoDateSchema,
}).label("UserSchema");
exports.usersSchema = Joi.array().items(exports.userSchema).label('Users');
