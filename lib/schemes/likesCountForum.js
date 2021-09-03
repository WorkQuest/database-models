"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const countLikeSchema = Joi.number().min(0).label('countLikes');
const likeIdSchema = common_1.idSchema.label('likeId');
const newsIdSchema = common_1.idSchema.label('newsId');
const userIdSchema = common_1.idSchema.label('newsId');
exports.likeNewsSchema = Joi.object({
    id: likeIdSchema,
    newsId: newsIdSchema,
    userId: userIdSchema,
}).label('likeNewsSchema');
exports.allCountsLikeNewsSchema = Joi.array().items(exports.likeNewsSchema).label('NewsAllSchema');
exports.getCountsLikeNewsSchema = Joi.object({
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
    count: countLikeSchema,
    likes: exports.allCountsLikeNewsSchema
}).label('GetCountsLikeNewsSchemaResponse');
