"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const user_1 = require("./user");
exports.sessionCountrySchema = Joi.string().example('Russia').label('SessionCountry');
exports.sessionCitySchema = Joi.string().example('Tokyo').label('SessionCity');
exports.sessionInvalidatingSchema = Joi.boolean().example(true).label('SessionInvalidating');
exports.sessionIpSchema = Joi.string().example('127.0.0.1').label('SessionInvalidating');
exports.sessionDeviceSchema = Joi.string().example('Mozilla/5.0 (X11; Windows x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Mozilla/93.1.2805.48 Safari/537.36').label('SessionInvalidating');
exports.sessionPlaceSchema = Joi.object({
    country: exports.sessionCountrySchema,
    city: exports.sessionCitySchema,
});
exports.sessionSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    place: exports.sessionPlaceSchema,
    invalidating: exports.sessionInvalidatingSchema,
    ip: exports.sessionIpSchema,
    device: exports.sessionDeviceSchema,
    logoutAt: common_1.isoDateSchema,
    user: user_1.userShortSchema,
}).label('Session');
