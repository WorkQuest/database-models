"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const forumPostCountLikeSchema = Joi.number().min(0).label('forumPostCountLike');
const forumPostLikeIdSchema = common_1.idSchema.label('forumPostLikeId');
const forumPostIdSchema = common_1.idSchema.label('forumPostId');
const userIdSchema = common_1.idSchema.label('newsId');
exports.forumPostLikeSchema = Joi.object({
    id: forumPostLikeIdSchema,
    forumPostId: forumPostIdSchema,
    userId: userIdSchema,
}).label('forumPostLikeSchemaResponse');
exports.forumPostLikesCountSchema = Joi.array().items(exports.forumPostLikeSchema).label('forumPostLikesCountSchemaResponse');
exports.forumPostGetLikesSchema = Joi.object({
    limit: common_1.limitSchema,
    offset: common_1.offsetSchema,
    count: forumPostCountLikeSchema,
    likes: exports.forumPostLikesCountSchema
}).label('forumPostGetLikesSchemaResponse');
