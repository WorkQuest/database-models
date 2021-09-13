"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const index_1 = require("./index");
const media_1 = require("./media");
const forumPostIdSchema = index_1.idSchema.label("forumPostId");
const authorIdSchema = index_1.idSchema.label("authorId");
exports.textTitleSchema = Joi.string().example("Text...").label("Text");
exports.forumPostSchema = Joi.object({
    id: forumPostIdSchema,
    authorId: authorIdSchema,
    title: exports.textTitleSchema,
    forumPostMedia: media_1.mediaIdsSchema,
    createdAt: index_1.isoDateSchema
}).label("forumPostSchemaResponse");
exports.countForumPostSchema = Joi.object({
    limit: index_1.limitSchema,
    offset: index_1.offsetSchema,
    forumPostId: exports.forumPostSchema
}).label("countForumPostSchemaResponse");
exports.forumPostsSchema = Joi.array().items(exports.countForumPostSchema).label('forumPostsSchemaResponse');
