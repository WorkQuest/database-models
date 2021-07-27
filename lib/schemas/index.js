"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTokens = exports.emptyOkSchema = exports.totpSchema = exports.hexTokenSchema = exports.outputPaginationSchema = exports.outputOkSchema = void 0;
const Joi = require("joi");
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
exports.hexTokenSchema = Joi.string().regex(/^[0-9a-fA-F]{40}$/).example("9997632b8e470e6fc7b48fac0528f06b5581ac29").label("HexToken");
exports.totpSchema = Joi.string().regex(/^\d{6}$/).example("123456").label("Totp");
exports.emptyOkSchema = Joi.object({
    ok: Joi.boolean().example(true)
}).label("EmptyOkResponse");
exports.jwtTokens = Joi.object({
    access: Joi.string().example("access jwt token"),
    refresh: Joi.string().example("refresh jwt token")
}).label("JwtTokensSchema");
