"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.idSchema = Joi.string().uuid().example('bfed0026-9ddf-4bf2-b941-791ca85040ff');
exports.isoDateSchema = Joi.string().isoDate().example('2021-03-23T04:22:47.724Z');
exports.countField = Joi.number().integer().example(10);
exports.firstNameSchema = Joi.string().max(255).example('Pavel');
exports.lastNameSchema = Joi.string().max(255).example('Durov');
exports.middleNameSchema = Joi.string().max(255).example('Valerievich');
exports.fullNameSchema = Joi.string().max(255).example('Pavel Durov');
exports.activityFieldSchema = Joi.string().max(255).example('Banking');
exports.missionSchema = Joi.string().max(255).example('Change the world');
exports.descriptionSchema = Joi.string().max(4000).example('some very detailed description');
exports.sumsubVerifiedSchema = Joi.boolean().example(false);
exports.emailSchema = Joi.string().email().max(255).example('test@test.com');
exports.phoneSchema = Joi.string().max(255).example('88005553535');
exports.passwordSchema = Joi.string().min(8).max(255);
exports.jwtToken = Joi.string().example('jwt token');
exports.hexToken = Joi.string().regex(/^[0-9a-fA-F]{40}$/).example('9997632b8e470e6fc7b48fac0528f06b5581ac29').label('HexToken');
exports.base64String = Joi.string().example('base64 string');
exports.paginationFields = {
    limit: Joi.number().integer().default(10).max(100).example(10),
    offset: Joi.number().integer().default(0).example(5)
};
