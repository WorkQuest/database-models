import Joi = require("joi");
import { idSchema } from "./common";
import { AdminRole, AdminRoles } from "../models";

export const adminFirstNameSchema = Joi.string().max(255).example('Pavel').label('AdminFirstName');
export const adminLastNameSchema = Joi.string().max(255).example('Durov').label('AdminLastName');
export const adminEmailSchema = Joi.string().email().max(255).example('test@test.com').label('AdminEmail');
export const adminPhoneSchema = Joi.string().max(255).example('88005553535').label('AdminPhone');
export const adminPasswordSchema = Joi.string().min(8).max(255).label('AdminPassword'); // TODO: describe custom validator rule
export const adminRoleSchema = Joi.string().max(255).valid(...AdminRoles).default(AdminRole.main).example('main').label('AdminRole');
export const isActiveSchema = Joi.boolean().example(true).label('AdminIsActive');

export const adminSchema = Joi.object({
  id: idSchema,
  email: adminEmailSchema,
  firstName: adminFirstNameSchema,
  lastName: adminLastNameSchema,
  isActive: isActiveSchema,
  adminRole: adminRoleSchema,
}).label('Admin')

