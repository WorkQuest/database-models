"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokensWithStatus = exports.jwtTokens = exports.emptyOkSchema = exports.locationSchema = exports.searchSchema = exports.limitSchema = exports.offsetSchema = exports.countSchema = exports.latitudeSchema = exports.longitudeSchema = exports.isoDateSchema = exports.sortDirectionSchema = exports.jwtTokenRefresh = exports.jwtTokenAccess = exports.totpSchema = exports.longHexTokenSchema = exports.hexTokenSchema = exports.urlSchema = exports.idSchema = exports.outputPaginationSchema = exports.outputOkSchema = void 0;
const Joi = require("joi");
const user_1 = require("./user");
const outputOkSchema = (res) => {
    return Joi.object({
        ok: Joi.boolean().example(true),
        result: res
    });
};
exports.outputOkSchema = outputOkSchema;
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
exports.tokensWithStatus = Joi.object({
    userStatus: user_1.userStatusSchema,
    access: exports.jwtTokenAccess,
    refresh: exports.jwtTokenRefresh,
}).label("TokensWithStatus");
__exportStar(require("./media"), exports);
__exportStar(require("./user"), exports);
__exportStar(require("./portfolio"), exports);
__exportStar(require("./quest"), exports);
__exportStar(require("./ratingStatistic"), exports);
__exportStar(require("./questsResponse"), exports);
__exportStar(require("./review"), exports);
__exportStar(require("./map"), exports);
__exportStar(require("./sumsub"), exports);
