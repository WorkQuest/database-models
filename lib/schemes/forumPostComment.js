"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const index_1 = require("./index");
const forumPostCommentIdSchema = index_1.idSchema.label("forumPostCommentId");
const authorIdSchema = index_1.idSchema.label("authorId");
const forumPostIdSchema = index_1.idSchema.label("forumPostId");
exports.forumPostRootCommentIdSchema = Joi.alternatives().try(Joi.string().uuid(), Joi.string().default(null)).label("IdOrNull");
exports.forumPostCommentSchema = Joi.object({
    id: forumPostCommentIdSchema,
    authorId: authorIdSchema,
    forumPostId: forumPostIdSchema,
    rootCommentId: exports.forumPostRootCommentIdSchema,
    title: index_1.textTitleSchema,
    createdAt: index_1.isoDateSchema,
}).label("forumPostCommentSchemaResponse");
exports.forumPostCountCommentsSchema = Joi.object({
    limit: index_1.limitSchema,
    offset: index_1.offsetSchema,
    comments: exports.forumPostCommentSchema
}).label("forumPostCountCommentsSchemaResponse");
exports.forumPostCommentsSchema = Joi.array().items(exports.forumPostCountCommentsSchema).label('forumPostCommentsSchemaResponse');
