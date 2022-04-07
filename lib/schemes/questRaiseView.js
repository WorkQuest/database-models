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
const types_1 = require("../models/raiseView/types");
exports.questRaiseTypeScheme = Joi.number().valid(...Object.values(types_1.QuestRaiseType)).example(types_1.QuestRaiseType.GoldPlus).label('QuestRaiseType');
exports.questRaiseStatusSchema = Joi.number().valid(...Object.keys(types_1.QuestRaiseStatus).map(key => parseInt(key)).filter(key => !isNaN(key))).example(types_1.QuestRaiseStatus.Paid).label('QuestRaiseStatus');
exports.questRaiseDurationSchema = Joi.number().valid(...Object.keys(types_1.QuestRaiseDuration).map(key => parseInt(key)).filter(key => !isNaN(key))).example(types_1.QuestRaiseDuration.OneDay).label('QuestRaiseDuration');
exports.questRaisePayAmountSchema = Joi.number().example(10).label('QuestRaisePayAmount');
exports.questRaiseViewSchema = Joi.object({
    id: common_1.idSchema,
    questId: common_1.idSchema,
    status: exports.questRaiseStatusSchema,
    duration: exports.questRaiseDurationSchema,
    type: exports.questRaiseTypeScheme,
    endedAt: common_1.isoDateSchema,
}).label('QuestRaiseView');
