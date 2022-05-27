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
const user_1 = require("./user");
exports.titleSupportSchema = Joi.string().example('New support post').label('TitleSupport');
exports.descriptionSupportSchema = Joi.string().example('New support description in the post').label('DescriptionSupport');
exports.supportCreateSchema = Joi.object({
    email: user_1.userEmailSchema,
    title: exports.titleSupportSchema,
    description: exports.descriptionSupportSchema,
}).label('SupportCreate');
