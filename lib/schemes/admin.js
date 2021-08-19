"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
exports.adminFirstNameSchema = Joi.string().max(255).example('Pavel').label('FirstNameSchema');
exports.adminLastNameSchema = Joi.string().max(255).example('Durov').label('LastNameSchema');
exports.adminEmailSchema = Joi.string().email().max(255).example('test@test.com').label('EmailSchema');
exports.adminPhoneSchema = Joi.string().max(255).example('88005553535').label('PhoneSchema');
exports.adminPasswordSchema = Joi.string().min(8).max(255).label('PasswordSchema');
exports.adminRoleSchema = Joi.string().valid(...models_1.AdminRoles).default(models_1.AdminRole.main).example(models_1.AdminRole.main).label('RoleSchema');
exports.isActiveSchema = Joi.boolean().example(true).label('IsActiveSchema');
exports.adminDeviceSchema = Joi.string().max(255).example('Phone').label('AdminDeviceSchema');
exports.adminCountrySchema = Joi.string().max(255).example('Russia').label('AdminCountrySchema');
exports.adminCitySchema = Joi.string().max(255).example('Tomsk').label('AdminPlaceSchema');
exports.adminSessionIsActiveSchema = Joi.bool().example(false).label('AdminSessionIsActiveSchema');
exports.adminAgeSchema = Joi.number().example(25).label('AdminAgeSchema');
exports.adminResolvedDisputesSchema = Joi.number().example(25).label('AdminResolvedDisputesSchema');
exports.adminAboutSchema = Joi.string().example('I am cool admin').label('AdminAboutSchema');
exports.adminLanguageSchema = Joi.string().max(255).example(models_1.AdminLanguages.en).label('AdminLanguageSchema');
exports.adminLanguagesSchema = Joi.array().items(exports.adminLanguageSchema).label('AdminLanguagesSchema');
exports.adminPlaceSchema = Joi.object({
    country: exports.adminCountrySchema,
    city: exports.adminCitySchema,
}).label('AdminPlaceSchema');
exports.adminLastSessionSchema = Joi.object({
    id: common_1.idSchema,
    adminId: common_1.idSchema,
    place: exports.adminPlaceSchema,
    device: exports.adminDeviceSchema,
    isActive: exports.adminSessionIsActiveSchema,
    logoutAt: common_1.isoDateSchema,
    lastActionTime: common_1.isoDateSchema,
    createdAt: common_1.isoDateSchema,
    updatedAt: common_1.isoDateSchema,
}).label('AdminLastSessionSchema');
exports.adminSchema = Joi.object({
    id: common_1.idSchema,
    lastSessionId: common_1.idSchema,
    email: exports.adminEmailSchema,
    firstName: exports.adminFirstNameSchema,
    lastName: exports.adminLastNameSchema,
    role: exports.adminRoleSchema,
    isActivated: exports.isActiveSchema,
    age: exports.adminAgeSchema,
    resolvedDisputes: exports.adminResolvedDisputesSchema,
    about: exports.adminAboutSchema,
    languages: exports.adminLanguagesSchema,
    lastSession: exports.adminLastSessionSchema,
    updatedAt: common_1.isoDateSchema,
    deletedAt: common_1.isoDateSchema,
}).label('AccountSchema');
exports.adminQuerySchema = Joi.object({
    offset: common_1.offsetSchema,
    limit: common_1.limitSchema,
}).label('AdminsQuery');
