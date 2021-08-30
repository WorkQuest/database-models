import Joi = require("joi");
import {idSchema, offsetSchema, limitSchema, isoDateSchema} from "./common";
import {AdminLanguages, AdminRole, AdminRoles} from "../models";
import {languageTableSchema} from "./language";
import {mediaUrlOnlySchema} from "./media";

export const adminFirstNameSchema = Joi.string().max(255).example('Pavel').label('FirstNameSchema');
export const adminLastNameSchema = Joi.string().max(255).example('Durov').label('LastNameSchema');
export const adminEmailSchema = Joi.string().email().max(255).example('test@test.com').label('EmailSchema');
export const adminPhoneSchema = Joi.string().max(255).example('88005553535').label('PhoneSchema');
export const adminPasswordSchema = Joi.string().min(8).max(255).label('PasswordSchema'); // TODO: describe custom validator rule
export const adminRoleSchema = Joi.string().valid(...AdminRoles).default(AdminRole.main).example(AdminRole.main).label('RoleSchema');
export const isActiveSchema = Joi.boolean().example(true).label('IsActiveSchema');
export const adminDeviceSchema = Joi.string().max(255).example('Phone').label('AdminDeviceSchema');
export const adminCountrySchema = Joi.string().max(255).example('Russia').label('AdminCountrySchema');
export const adminCitySchema = Joi.string().max(255).example('Tomsk').label('AdminPlaceSchema');
export const adminSessionIsActiveSchema = Joi.bool().example(false).label('AdminSessionIsActiveSchema');
export const adminAgeSchema = Joi.number().example(25).label('AdminAgeSchema');
export const adminResolvedDisputesSchema = Joi.number().example(25).label('AdminResolvedDisputesSchema');
export const adminAboutSchema = Joi.string().example('I am cool admin').label('AdminAboutSchema');
export const adminLanguagesSchema = Joi.array().items(languageTableSchema).default([]).label('AdminLanguagesSchema');

export const adminPlaceSchema = Joi.object({
  country: adminCountrySchema,
  city: adminCitySchema,
}).label('AdminPlaceSchema');

export const adminAdditionalInfoSchema = Joi.object({
  age: adminAgeSchema,
  resolvedDisputes: adminResolvedDisputesSchema,
  about: adminAboutSchema,
}).label('AdminAdditionalInfoSchema');

export const adminLastSessionSchema = Joi.object({
  id: idSchema,
  adminId: idSchema,
  place: adminPlaceSchema,
  device: adminDeviceSchema,
  isActive: adminSessionIsActiveSchema,
  logoutAt: isoDateSchema,
  lastActionTime: isoDateSchema,
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
}).label('AdminLastSessionSchema');

export const adminSchema = Joi.object({
  id: idSchema,
  lastSessionId: idSchema,
  avatarId: idSchema,
  email: adminEmailSchema,
  firstName: adminFirstNameSchema,
  lastName: adminLastNameSchema,
  role: adminRoleSchema,
  avatar: mediaUrlOnlySchema.allow(null),
  languages: adminLanguagesSchema,
  isActivated: isActiveSchema,
  additionalInfo: adminAdditionalInfoSchema,
  lastSession: adminLastSessionSchema,
  updatedAt: isoDateSchema,
  deletedAt: isoDateSchema,
}).label('AdminAccountSchema')

export const adminQuerySchema = Joi.object({
  offset: offsetSchema,
  limit: limitSchema,
}).label('AdminsQuery');
