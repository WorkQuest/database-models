"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const index_1 = require("./index");
const commentIdSchema = index_1.idSchema.label("commentId");
const authorIdSchema = index_1.idSchema.label("authorId");
const newsIdSchema = index_1.idSchema.label("newsId");
const likeIdSchema = index_1.idSchema.label("likeCommentId");
exports.textTitleSchema = Joi.string().example("Text...").label("Text");
exports.commentIdOrNullSchema = Joi.alternatives().try(Joi.string().uuid(), Joi.string().default(null)).label("IdOrNull");
exports.forumNewsCommentSchema = Joi.object({
    id: commentIdSchema,
    authorId: authorIdSchema,
    newsId: newsIdSchema,
    rootCommentId: commentIdSchema,
    text: exports.textTitleSchema,
    createdAt: index_1.isoDateSchema,
    updatedAt: index_1.isoDateSchema
}).label("newsForumSchema");
exports.forumLikeCommentSchemes = Joi.object({
    id: likeIdSchema,
    commentId: commentIdSchema,
    userId: authorIdSchema,
    createdAt: index_1.isoDateSchema,
    updatedAt: index_1.isoDateSchema
}).label("likeCommentSchema");
