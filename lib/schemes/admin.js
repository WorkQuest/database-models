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
exports.adminRoleSchema = Joi.string().max(255).valid(...models_1.AdminRoles).default(models_1.AdminRole.main).example('main').label('RoleSchema');
exports.isActiveSchema = Joi.boolean().example(true).label('IsActiveSchema');
exports.adminSchema = Joi.object({
    id: common_1.idSchema,
    email: exports.adminEmailSchema,
    firstName: exports.adminFirstNameSchema,
    lastName: exports.adminLastNameSchema,
    isActive: exports.isActiveSchema,
    adminRole: exports.adminRoleSchema,
}).label('AccountSchema');
exports.adminQuerySchema = Joi.object({
    offset: common_1.offsetSchema,
    limit: common_1.limitSchema,
}).label('QuestsQuery');
