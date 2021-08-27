"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const Language_1 = require("../models/Language");
exports.languageSchema = Joi.string().max(255).valid(...Language_1.languages).default(Language_1.LanguagesEnum.en).example('en').label('LanguageSchema');
exports.languageTableSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    language: exports.languageSchema,
}).label('LanguageSchema');
