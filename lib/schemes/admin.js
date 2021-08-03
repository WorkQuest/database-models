"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const Admin_1 = require("../models/Admin");
exports.adminRoleSchema = Joi.string().allow(...Admin_1.Roles).default(Admin_1.Role.main);
exports.isActiveSchema = Joi.boolean().example(true);
exports.accountSchema = Joi.object({
    id: common_1.idSchema,
    email: common_1.emailSchema,
    firstName: common_1.firstNameSchema,
    lastName: common_1.lastNameSchema,
    isActive: exports.isActiveSchema,
    adminRole: exports.adminRoleSchema,
}).label('AccountSchema');
