import Joi = require("joi");
import {
	emailSchema,
	firstNameSchema,
	idSchema,
	lastNameSchema,
} from "./common";
import { Role, Roles, } from "../models/Admin";

export const adminRoleSchema = Joi.string().max(255).valid(...Roles).default(Role.main).example('main');
export const isActiveSchema = Joi.boolean().example(true)

export const accountSchema = Joi.object({
	id: idSchema,

    email: emailSchema,
	firstName: firstNameSchema,
	lastName: lastNameSchema,
	isActive: isActiveSchema,

	adminRole: adminRoleSchema,
}).label('AccountSchema')
