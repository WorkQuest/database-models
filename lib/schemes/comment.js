"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const index_1 = require("./index");
const commentIdSchema = index_1.idSchema.label("commentId");
const authorIdSchema = index_1.idSchema.label("authorId");
const newsIdSchema = index_1.idSchema.label("newsId");
exports.textTitleSchema = Joi.string().example("Text...").label("Text");
exports.commentIdOrNullSchema = Joi.alternatives().try(Joi.string().uuid(), Joi.string().default(null)).label("IdOrNull");
exports.commentSchema = Joi.object({
    id: commentIdSchema,
    authorId: authorIdSchema,
    newsId: newsIdSchema,
    rootCommentId: exports.commentIdOrNullSchema,
    text: exports.textTitleSchema,
    createdAt: index_1.isoDateSchema,
}).label("newsForumSchema");
exports.countCommentSchema = Joi.object({
    limit: index_1.limitSchema,
    offset: index_1.offsetSchema,
    comments: exports.commentSchema
}).label("countNewsSchema");
exports.commentsSchema = Joi.array().items(exports.countCommentSchema).label('NewsAllSchema');
