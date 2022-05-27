"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("joi"));
const common_1 = require("./common");
const user_1 = require("./user");
const models_1 = require("../models");
exports.userRaiseViewStatusSchema = Joi.number().valid(...Object.keys(models_1.UserRaiseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.UserRaiseStatus.Paid).label('UserRaiseViewStatus');
exports.userRaiseViewDurationSchema = Joi.number().valid(...Object.keys(models_1.UserRaiseDuration).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.UserRaiseDuration.OneDay).label('UserRaiseViewDuration');
exports.userRaiseViewTypeSchema = Joi.number().valid(...Object.values(models_1.UserRaiseType)).example(models_1.UserRaiseType.GoldPlus).label('UserRaiseViewType');
exports.userRaiseViewSchema = Joi.object({
    status: exports.userRaiseViewStatusSchema,
    duration: exports.userRaiseViewDurationSchema,
    type: exports.userRaiseViewTypeSchema,
    endedAt: common_1.isoDateSchema,
    user: user_1.userShortSchema,
}).label('UserRaiseView');
