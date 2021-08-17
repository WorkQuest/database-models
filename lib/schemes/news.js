"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const index_1 = require("./index");
const media_1 = require("./media");
const newsIdSchema = index_1.idSchema.label("newsId");
const authorIdSchema = index_1.idSchema.label("authorId");
const likeNewsIdSchemes = index_1.idSchema.label("questId");
const commentIdSchema = index_1.idSchema.label("commentId");
exports.textTitleSchema = Joi.string().example("Text...").label("Text");
exports.textCommentSchema = Joi.string().example("Text...").label("Text");
exports.getForumNewsSchema = Joi.object({
    id: newsIdSchema,
    authorId: authorIdSchema,
    text: exports.textTitleSchema,
    newsMedia: media_1.mediaIdsSchema,
    createdAt: index_1.isoDateSchema,
    updatedAt: index_1.isoDateSchema
}).label("newsForumSchemes");
exports.forumLikeNewsSchemes = Joi.object({
    id: likeNewsIdSchemes,
    newsId: newsIdSchema,
    userId: authorIdSchema
});
exports.forumNewsCommentsSchemes = Joi.object({
    limit: index_1.limitSchema,
    offset: index_1.offsetSchema,
    id: commentIdSchema,
    authorId: authorIdSchema,
    newsId: newsIdSchema,
    rootCommentId: commentIdSchema,
    text: exports.textCommentSchema
});
