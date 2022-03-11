"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRaiseViewSchema = exports.userRaiseViewTypeSchema = exports.userRaiseViewDurationSchema = exports.userRaiseViewStatusSchema = void 0;
const Joi = require("joi");
const common_1 = require("./common");
const user_1 = require("./user");
const models_1 = require("../models");
exports.userRaiseViewStatusSchema = Joi.number().valid(...Object.keys(models_1.UserRaiseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.UserRaiseStatus.Paid).label('UserRaiseViewStatus');
exports.userRaiseViewDurationSchema = Joi.number().valid(...Object.keys(models_1.UserRaiseDuration).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.UserRaiseDuration.OneDay).label('UserRaiseViewDuration');
exports.userRaiseViewTypeSchema = Joi.number().valid(...Object.values(models_1.UserRaiseType)).example(models_1.UserRaiseType.GoldPlus).label('UserRaiseViewType');
exports.userRaiseViewSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    status: exports.userRaiseViewStatusSchema,
    duration: exports.userRaiseViewDurationSchema,
    type: exports.userRaiseViewTypeSchema,
    user: user_1.userShortSchema,
}).label('UserRaiseView');
