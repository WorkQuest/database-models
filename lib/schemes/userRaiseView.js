"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRaiseViewSchema = exports.userRaiseViewTypeSchema = exports.userRaiseViewDurationSchema = exports.userRaiseViewStatusSchema = void 0;
const Joi = __importStar(require("joi"));
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
    endedAt: common_1.isoDateSchema,
    user: user_1.userShortSchema,
}).label('UserRaiseView');
