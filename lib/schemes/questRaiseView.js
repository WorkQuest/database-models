"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.questRaiseViewSchema = exports.questRaisePayAmountSchema = exports.questRaiseDurationSchema = exports.questRaiseStatusSchema = exports.questRaiseTypeScheme = void 0;
const Joi = __importStar(require("joi"));
const common_1 = require("./common");
const quest_1 = require("./quest");
const user_1 = require("./user");
const models_1 = require("../models");
exports.questRaiseTypeScheme = Joi.number().valid(...Object.values(models_1.QuestRaiseType)).example(models_1.QuestRaiseType.GoldPlus).label('QuestRaiseType');
exports.questRaiseStatusSchema = Joi.number().valid(...Object.keys(models_1.QuestRaiseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.QuestRaiseStatus.Paid).label('QuestRaiseStatus');
exports.questRaiseDurationSchema = Joi.number().valid(...Object.keys(models_1.QuestRaiseDuration).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.QuestRaiseDuration.OneDay).label('QuestRaiseDuration');
exports.questRaisePayAmountSchema = Joi.number().example(10).label('QuestRaisePayAmount');
exports.questRaiseViewSchema = Joi.object({
    id: common_1.idSchema,
    questId: common_1.idSchema,
    status: exports.questRaiseStatusSchema,
    duration: exports.questRaiseDurationSchema,
    type: exports.questRaiseTypeScheme,
    quest: quest_1.questSchema,
    user: user_1.userShortSchema,
}).label('QuestRaiseView');
