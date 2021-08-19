"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const index_1 = require("./index");
const media_1 = require("./media");
const newsIdSchema = index_1.idSchema.label("newsId");
const authorIdSchema = index_1.idSchema.label("authorId");
exports.newsSchema = Joi.object({
    id: newsIdSchema,
    authorId: authorIdSchema,
    text: index_1.textTitleSchema,
    newsMedia: media_1.mediaIdsSchema,
    createdAt: index_1.isoDateSchema
}).label("NewsSchema");
exports.countNewsSchema = Joi.object({
    limit: index_1.limitSchema,
    offset: index_1.offsetSchema,
    news: exports.newsSchema
}).label("countNewsSchema");
exports.newsAllSchema = Joi.array().items(exports.countNewsSchema).label('NewsAllSchema');
