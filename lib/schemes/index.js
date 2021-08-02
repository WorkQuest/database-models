"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.jwtTokenAccess = Joi.string().example("access jwt token");
exports.jwtTokenRefresh = Joi.string().example("refresh jwt token");
exports.outputOkSchema = (res) => Joi.object({
    ok: Joi.boolean().example(true),
    result: res,
});
function outputPaginationSchema(title, item) {
    return Joi.object({
        ok: Joi.boolean().example(true),
        result: Joi.object({
            count: Joi.number().integer().example(10),
            [title]: Joi.array().items(item),
        }),
    });
}
exports.outputPaginationSchema = outputPaginationSchema;
exports.emptyOutputSchema = Joi.object({
    ok: Joi.boolean().example(true)
}).label('EmptyOutputSchema');
exports.jwtTokens = Joi.object({
    access: exports.jwtTokenAccess,
    refresh: exports.jwtTokenRefresh,
}).label("JwtTokensSchema");
