"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediasUrlOnlySchema = exports.mediaSchema = exports.mediaUploadLinkSchema = exports.mediaUrlOnlySchema = exports.mediaHashSchema = exports.mediaContentTypeSchema = void 0;
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
