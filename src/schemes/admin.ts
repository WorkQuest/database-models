import Joi = require("joi");
import { idSchema, } from "./common";
import { Role, Roles, } from "../models";

export const adminFirstNameSchema = Joi.string().max(255).example('Pavel');
export const adminLastNameSchema = Joi.string().max(255).example('Durov');
export const adminEmailSchema = Joi.string().email().max(255).example('test@test.com');
export const adminPhoneSchema = Joi.string().max(255).example('88005553535')
export const adminPasswordSchema = Joi.string().min(8).max(255) // TODO: describe custom validator rule
export const adminRoleSchema = Joi.string().max(255).valid(...Roles).default(Role.main).example('main');
export const isActiveSchema = Joi.boolean().example(true)

export const accountSchema = Joi.object({
    id: idSchema,

    email: adminEmailSchema,
    firstName: adminFirstNameSchema,
    lastName: adminLastNameSchema,
    isActive: isActiveSchema,

    adminRole: adminRoleSchema,
}).label('AccountSchema')
