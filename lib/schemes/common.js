"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTokens = exports.emptyOkSchema = exports.locationSchema = exports.outputPaginationSchema = exports.paginationFields = exports.outputOkSchema = exports.mobilePhoneSchema = exports.searchSchema = exports.limitSchema = exports.offsetSchema = exports.countSchema = exports.latitudeSchema = exports.longitudeSchema = exports.isoDateSchema = exports.sortDirectionSchema = exports.jwtTokenRefresh = exports.jwtTokenAccess = exports.totpSchema = exports.longHexTokenSchema = exports.hexTokenSchema = exports.urlSchema = exports.idSchema = void 0;
const Joi = require("joi");
exports.idSchema = Joi.string().uuid().example("fa0e2e4e-c53f-4af7-8906-1649daa0cce3").label("Id");
exports.urlSchema = Joi.string().example("http://example.com/v1/getVideo").label("URL");
exports.hexTokenSchema = Joi.string().regex(/^[0-9a-fA-F]{6}$/).example("999763").label("HexToken");
exports.longHexTokenSchema = Joi.string().regex(/^[0-9a-fA-F]{40}$/).example("999763").label("HexToken");
exports.totpSchema = Joi.string().regex(/^\d{6}$/).example("123456").label("Totp");
exports.jwtTokenAccess = Joi.string().example("access jwt token");
exports.jwtTokenRefresh = Joi.string().example("refresh jwt token");
exports.sortDirectionSchema = Joi.string().valid("ASC", "DESC", "asc", "desc");
exports.isoDateSchema = Joi.string().isoDate().example("2021-05-12T05:24:47.322Z");
exports.longitudeSchema = Joi.number().min(-180).max(180).example(84.948846).label("Longitude");
exports.latitudeSchema = Joi.number().min(-90).max(90).example(56.48122).label("Latitude");
exports.countSchema = Joi.number().example(10);
exports.offsetSchema = Joi.number().min(0).default(0).label("Offset");
exports.limitSchema = Joi.number().min(0).default(10).max(100).label('Limit');
exports.searchSchema = Joi.string().default(null).max(255).label('Search');
exports.mobilePhoneSchema = Joi.string().length(10).pattern(/^[0-9]+$/).label('MobilePhone');
const outputOkSchema = (res) => {
    return Joi.object({
        ok: Joi.boolean().example(true),
        result: res
    });
};
exports.outputOkSchema = outputOkSchema;
exports.paginationFields = {
    limit: Joi.number().integer().default(10).max(100).example(10),
    offset: Joi.number().integer().default(0).example(5)
};
function outputPaginationSchema(title, item) {
    return Joi.object({
        ok: Joi.boolean().example(true),
        result: Joi.object({
            count: Joi.number().integer().example(10),
            [title]: Joi.array().items(item)
        })
    });
}
exports.outputPaginationSchema = outputPaginationSchema;
exports.locationSchema = Joi.object({
    longitude: exports.longitudeSchema.required(),
    latitude: exports.latitudeSchema.required(),
}).label('Location');
exports.emptyOkSchema = Joi.object({
    ok: Joi.boolean().example(true)
}).label("EmptyOkResponse");
exports.jwtTokens = Joi.object({
    access: exports.jwtTokenAccess,
    refresh: exports.jwtTokenRefresh,
}).label("JwtTokensSchema");
