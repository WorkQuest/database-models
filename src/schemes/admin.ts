import Joi = require("joi");
import {AdminRole} from "../models";
import {HTTPVerbSchema, idSchema} from "./common";

export const adminFirstNameSchema = Joi.string().max(255).example('Pavel').label('AdminFirstName');
export const adminLastNameSchema = Joi.string().max(255).example('Durov').label('AdminLastName');
export const adminEmailSchema = Joi.string().email().max(255).example('test@test.com').label('AdminEmail');
export const adminPasswordSchema = Joi.string().min(8).max(255).label('AdminPassword'); // TODO: describe custom validator rule
export const adminRoleSchema = Joi.string().valid(...Object.values(AdminRole)).example(AdminRole.Main).label('AdminRole');
export const adminIsActiveSchema = Joi.boolean().example(true).label('AdminIsActive');
export const adminActionPathSchema = Joi.string().example('/v1/admin/change/name').label('AdminActionRoute');

export const adminSchema = Joi.object({
  id: idSchema,
  email: adminEmailSchema,
  firstName: adminFirstNameSchema,
  lastName: adminLastNameSchema,
  isActive: adminIsActiveSchema,
  adminRole: adminRoleSchema,
}).label('Admin');

export const adminWithSecretSchema = Joi.object({
  admin: adminSchema,
  secret: Joi.string().max(255).example('HJRT4QCSGNHGSYLF'),
}).label('RegisterAdminWithSecretSchema');

export const adminActionMetadataSchema = Joi.object({
  id: idSchema,
  adminId: idSchema,
  HTTPVerb: HTTPVerbSchema,
  path: adminActionPathSchema,
}).label('AdminAction');

