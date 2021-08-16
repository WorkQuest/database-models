import Joi = require("joi");
import {idSchema, offsetSchema, limitSchema, isoDateSchema} from "./common";
import { AdminRole, AdminRoles } from "../models";

export const adminFirstNameSchema = Joi.string().max(255).example('Pavel').label('FirstNameSchema');
export const adminLastNameSchema = Joi.string().max(255).example('Durov').label('LastNameSchema');
export const adminEmailSchema = Joi.string().email().max(255).example('test@test.com').label('EmailSchema');
export const adminPhoneSchema = Joi.string().max(255).example('88005553535').label('PhoneSchema');
export const adminPasswordSchema = Joi.string().min(8).max(255).label('PasswordSchema'); // TODO: describe custom validator rule
export const adminRoleSchema = Joi.number().valid(...AdminRoles).default(AdminRole.main).example(AdminRole.main).label('RoleSchema');
export const isActiveSchema = Joi.boolean().example(true).label('IsActiveSchema');
export const adminDeviceSchema = Joi.string().max(255).example('Phone').label('AdminDeviceSchema');
export const adminCountrySchema = Joi.string().max(255).example('Russia').label('AdminCountrySchema');
export const adminCitySchema = Joi.string().max(255).example('Tomsk').label('AdminPlaceSchema');
export const adminSessionIsActiveSchema = Joi.bool().example(false).label('AdminSessionIsActiveSchema');
export const adminPlaceSchema = Joi.object({
  country: adminCountrySchema,
  city: adminCitySchema,
}).label('AdminPlaceSchema');

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
  email: adminEmailSchema,
  firstName: adminFirstNameSchema,
  lastName: adminLastNameSchema,
  isActivated: isActiveSchema,
  adminRole: adminRoleSchema,
  lastSession: adminLastSessionSchema,
  updatedAt: isoDateSchema,
  deletedAt: isoDateSchema,
}).label('AccountSchema')

export const adminQuerySchema = Joi.object({
  offset: offsetSchema,
  limit: limitSchema,
}).label('AdminsQuery');
