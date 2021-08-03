import Joi = require("joi");
import {
	emailSchema,
	firstNameSchema,
	idSchema,
	lastNameSchema,
} from "./common";
import { Role, Roles, } from "../models/Admin";

export const adminRoleSchema = Joi.string().allow(...Roles).default(Role.main);
export const isActiveSchema = Joi.boolean().example(true)

export const accountSchema = Joi.object({
	id: idSchema,

    email: emailSchema,
	firstName: firstNameSchema,
	lastName: lastNameSchema,
	isActive: isActiveSchema,

	adminRole: adminRoleSchema,
}).label('AccountSchema')
