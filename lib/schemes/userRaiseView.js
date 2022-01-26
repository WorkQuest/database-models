"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const models_1 = require("../models");
const user_1 = require("./user");
exports.userRaiseStatusSchema = Joi.number().valid(...Object.keys(models_1.UserRaiseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.UserRaiseStatus.Unpaid).label('UserRaiseStatus');
exports.userRaiseDurationSchema = Joi.number().valid(...Object.keys(models_1.UserRaiseDuration).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.UserRaiseDuration.OneDay).label('UserRaiseDuration');
exports.userRaiseViewSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    status: exports.userRaiseStatusSchema,
    duration: exports.userRaiseDurationSchema,
    type: common_1.userRaiseTypeScheme,
    user: user_1.userShortSchema,
}).default({}).label('UserRaiseView');
