"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const models_1 = require("../models");
const index_1 = require("./index");
const mediaIdSchema = index_1.idSchema.label("MediaId");
exports.mediaContentTypeSchema = Joi.string().valid(...Object.values(models_1.ContentType)).example(models_1.ContentType.png).label("ContentType");
exports.mediaHashSchema = Joi.number().min(60).max(60).label("MediaHash");
exports.mediaUrlOnlySchema = Joi.object({
    id: mediaIdSchema,
    url: index_1.urlSchema
}).label("MediaUrlOnlyScheme");
exports.mediaSchema = Joi.object({
    id: mediaIdSchema,
    userId: index_1.idSchema.label("UserId"),
    contentType: exports.mediaContentTypeSchema,
    url: index_1.urlSchema,
    hash: exports.mediaHashSchema,
}).label('MediaScheme');
exports.mediaIdsSchema = Joi.array().items(mediaIdSchema).label("MediaIdsArray");
exports.mediasUrlOnlySchema = Joi.array().items(exports.mediaUrlOnlySchema).label('MediasUrlOnlyScheme');
//# sourceMappingURL=media.js.map