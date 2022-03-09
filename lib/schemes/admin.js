"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const models_1 = require("../models");
const common_1 = require("./common");
exports.adminFirstNameSchema = Joi.string().max(255).example('Pavel').label('AdminFirstName');
exports.adminLastNameSchema = Joi.string().max(255).example('Durov').label('AdminLastName');
exports.adminEmailSchema = Joi.string().email().max(255).example('test@test.com').label('AdminEmail');
exports.adminPasswordSchema = Joi.string().min(8).max(255).label('AdminPassword');
exports.adminRoleSchema = Joi.string().valid(...Object.values(models_1.AdminRole)).default(models_1.AdminRole.main).example('main').label('AdminRole');
exports.adminIsActiveSchema = Joi.boolean().example(true).label('AdminIsActive');
exports.adminActionPathSchema = Joi.string().example('/v1/admin/change/name').label('AdminActionRoute');
exports.adminSchema = Joi.object({
    id: common_1.idSchema,
    email: exports.adminEmailSchema,
    firstName: exports.adminFirstNameSchema,
    lastName: exports.adminLastNameSchema,
    isActive: exports.adminIsActiveSchema,
    adminRole: exports.adminRoleSchema,
}).label('Admin');
exports.adminWithSecretSchema = Joi.object({
    admin: exports.adminSchema,
    secret: Joi.string().max(255).example('HJRT4QCSGNHGSYLF'),
}).label('RegisterAdminWithSecretSchema');
exports.adminActionMetadataSchema = Joi.object({
    id: common_1.idSchema,
    adminId: common_1.idSchema,
    HTTPVerb: common_1.HTTPVerbSchema,
    path: exports.adminActionPathSchema,
}).label('AdminAction');
