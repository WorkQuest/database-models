"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
exports.adminFirstNameSchema = Joi.string().max(255).example('Pavel');
exports.adminLastNameSchema = Joi.string().max(255).example('Durov');
exports.adminEmailSchema = Joi.string().email().max(255).example('test@test.com');
exports.adminPhoneSchema = Joi.string().max(255).example('88005553535');
exports.adminPasswordSchema = Joi.string().min(8).max(255);
exports.adminRoleSchema = Joi.string().max(255).valid(...models_1.Roles).default(models_1.Role.main).example('main');
exports.isActiveSchema = Joi.boolean().example(true);
exports.accountSchema = Joi.object({
    id: common_1.idSchema,
    email: exports.adminEmailSchema,
    firstName: exports.adminFirstNameSchema,
    lastName: exports.adminLastNameSchema,
    isActive: exports.isActiveSchema,
    adminRole: exports.adminRoleSchema,
}).label('AccountSchema');
