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
const models_1 = require("../models");
const common_1 = require("./common");
exports.mediaContentTypeSchema = Joi.string().valid(...Object.values(models_1.ContentType)).example(models_1.ContentType.png).label("ContentType");
exports.mediaHashSchema = Joi.number().min(60).max(60).label("MediaHash");
exports.mediaUrlOnlySchema = Joi.object({
    id: common_1.idSchema,
    url: common_1.urlSchema,
    contentType: exports.mediaContentTypeSchema
}).label("MediaUrlOnly");
exports.mediaUploadLinkSchema = Joi.object({
    mediaId: common_1.idSchema,
    url: common_1.urlSchema,
}).label('MediaUploadLink');
exports.mediaSchema = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    contentType: exports.mediaContentTypeSchema,
    url: common_1.urlSchema,
    hash: exports.mediaHashSchema,
}).label('Media');
exports.mediasUrlOnlySchema = Joi.array().items(exports.mediaUrlOnlySchema).label('MediasUrlOnly');
