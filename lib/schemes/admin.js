"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
const statistics_1 = require("./statistics");
exports.adminFirstNameSchema = Joi.string().max(255).example('Pavel').label('AdminFirstName');
exports.adminLastNameSchema = Joi.string().max(255).example('Durov').label('AdminLastName');
exports.adminEmailSchema = Joi.string().email().max(255).example('test@test.com').label('AdminEmail');
exports.adminPasswordSchema = Joi.string().min(8).max(255).label('AdminPassword');
exports.adminRoleSchema = Joi.string().valid(...Object.values(models_1.AdminRole)).default(models_1.AdminRole.main).example('main').label('AdminRole');
exports.isActiveSchema = Joi.boolean().example(true).label('AdminIsActive');
exports.adminActionMethodSchema = Joi.string().valid(...Object.values(models_1.AdminActionMethod)).example(models_1.AdminActionMethod.Post).label('AdminActionMethod');
exports.adminActionPathSchema = Joi.string().example('/v1/admin/change/name').label('AdminActionRoute');
exports.resolvedQuestDisputesSchema = Joi.number().example(5).label('ResolvedDisputes');
exports.adminSchema = Joi.object({
    id: common_1.idSchema,
    email: exports.adminEmailSchema,
    firstName: exports.adminFirstNameSchema,
    lastName: exports.adminLastNameSchema,
    isActive: exports.isActiveSchema,
    adminRole: exports.adminRoleSchema,
}).label('Admin');
exports.adminRatingStatisticSchema = Joi.object({
    id: common_1.idSchema,
    adminId: common_1.idSchema,
    reviewCount: statistics_1.ratingStatisticReviewCountSchema,
    averageMark: statistics_1.ratingStatisticAverageMarkSchema,
    admin: exports.adminSchema,
}).label('AdminRatingStatistic');
exports.adminWithSecretSchema = Joi.object({
    admin: exports.adminSchema,
    secret: Joi.string().max(255).example('HJRT4QCSGNHGSYLF'),
}).label('RegisterAdminWithSecretSchema');
exports.adminActionSchema = Joi.object({
    id: common_1.idSchema,
    adminId: common_1.idSchema,
    method: exports.adminActionMethodSchema,
    path: exports.adminActionPathSchema,
}).label('AdminAction');
exports.adminQuestDisputesStatisticSchema = Joi.object({
    id: common_1.idSchema,
    adminId: common_1.idSchema,
    resolvedDisputes: exports.resolvedQuestDisputesSchema,
    averageResolutionTime: common_1.isoDateSchema,
    admin: exports.adminSchema,
}).label('AdminQuestDisputesStatistic');
