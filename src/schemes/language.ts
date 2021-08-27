import Joi = require("joi");
import {idSchema} from "./common";
import {LanguagesEnum, languages} from "../models/Language";

export const languageSchema = Joi.string().max(255).valid(...languages).default(LanguagesEnum.en).example('en').label('LanguageSchema');

export const languageTableSchema = Joi.object({
  id: idSchema,
  userId: idSchema,
  language: languageSchema,
}).label('LanguageSchema');
