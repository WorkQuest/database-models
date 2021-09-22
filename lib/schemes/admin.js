"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
exports.adminFirstNameSchema = Joi.string().max(255).example('Pavel').label('AdminFirstName');
exports.adminLastNameSchema = Joi.string().max(255).example('Durov').label('AdminLastName');
exports.adminEmailSchema = Joi.string().email().max(255).example('test@test.com').label('AdminEmail');
exports.adminPhoneSchema = Joi.string().max(255).example('88005553535').label('AdminPhone');
exports.adminPasswordSchema = Joi.string().min(8).max(255).label('AdminPassword');
exports.adminRoleSchema = Joi.string().max(255).valid(...models_1.AdminRoles).default(models_1.AdminRole.main).example('main').label('AdminRole');
exports.isActiveSchema = Joi.boolean().example(true).label('AdminIsActive');
exports.adminSchema = Joi.object({
    id: common_1.idSchema,
    email: exports.adminEmailSchema,
    firstName: exports.adminFirstNameSchema,
    lastName: exports.adminLastNameSchema,
    isActive: exports.isActiveSchema,
    adminRole: exports.adminRoleSchema,
}).label('Admin');
